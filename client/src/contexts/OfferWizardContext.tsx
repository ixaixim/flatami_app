import { createContext, useCallback, useContext, useMemo, useState } from 'react';

export type OfferingType = 'flat' | 'room' | null;

export type OfferWizardData = {
  offeringType: OfferingType;
  address?: string; // user-entered full address
  periodType?: 'limited' | 'unlimited';
  startDate?: string; // ISO yyyy-mm-dd
  endDate?: string;   // ISO yyyy-mm-dd
  roomsCount?: number; // bedrooms + living + dining
  areaSqm?: number;    // total area in m^2
  // future: geo { lat, lng }, city, etc.
};

type OfferWizardContextValue = {
  data: OfferWizardData;
  set<K extends keyof OfferWizardData>(key: K, value: OfferWizardData[K]): void;
  reset(): void;
  submit(): Promise<Response | void>;
};

const OfferWizardContext = createContext<OfferWizardContextValue | null>(null);

const initialData: OfferWizardData = { offeringType: null };

export function OfferWizardProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<OfferWizardData>(() => {
    try {
      const raw = localStorage.getItem('offer-wizard');
      return raw ? { ...initialData, ...JSON.parse(raw) } : initialData;
    } catch {
      return initialData;
    }
  });

  // Stable setter that bails when the value hasn't changed.
  const setField = useCallback(<K extends keyof OfferWizardData>(key: K, value: OfferWizardData[K]) => {
    setData((prev) => {
      if (prev[key] === value) return prev;
      const next = { ...prev, [key]: value } as OfferWizardData;
      try { localStorage.setItem('offer-wizard', JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setData(initialData);
    try { localStorage.removeItem('offer-wizard'); } catch {}
  }, []);

  const submit = useCallback(async () => {
    // Minimal POST; server wiring will arrive later
    try {
      const res = await fetch('/api/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return res;
    } catch (e) {
      console.warn('Submit failed (dev mode placeholder):', e);
    }
  }, [data]);

  const value = useMemo<OfferWizardContextValue>(() => ({
    data,
    set: setField,
    reset,
    submit,
  }), [data, setField, reset, submit]);

  return (
    <OfferWizardContext.Provider value={value}>{children}</OfferWizardContext.Provider>
  );
}

export function useOfferWizard() {
  const ctx = useContext(OfferWizardContext);
  if (!ctx) throw new Error('useOfferWizard must be used within OfferWizardProvider');
  return ctx;
}
