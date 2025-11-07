'use client';

import Loading from "@/components/Loading";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ValidateClient = () => {
  const [loading, setLoading] = useState(true);
  const [licencia, setLicencia] = useState<string[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const id = searchParams.get('id') || '';
      if (!id) {
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`/portfolio/validations/${id}.txt`);
        if (response && response.ok) {
          const text = await response.text();
          if (text) {
            setLicencia(text.split('\n').map((l) => l.trim()));
          }
        } else {
          setLicencia([]);
        }
      } catch (err) {
        console.error('Failed to fetch validation file', err);
        setLicencia([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  if (loading) return <Loading />;

  return (
    <div id="information">
      <p>{licencia.length ? licencia[0] : ''}</p>
      <p>{licencia.length > 1 ? licencia[1] : ''}</p>
    </div>
  );
};

export default ValidateClient;
