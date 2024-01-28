import React, { useState, useEffect } from "react";

export function useEcgFormState() {
  const [ecgDatetime, setEcgDatetime] = useState<string>("");
  const [ecgFile, setEcgFile] = useState<File | undefined>();
  const [submitDisabled, setSubmitDisabled] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const isSubmitDisabled = !!ecgFile ? undefined : true;

    setSubmitDisabled(() => isSubmitDisabled);
  }, [ecgDatetime, ecgFile]);

  const changeEcgFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEcgFile(() => event.target.files?.[0]);
  };

  const changeEcgDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEcgDatetime(() => event.target.value);
  };

  return {
    ecgDatetime,
    ecgFile,
    submitDisabled,
    changeEcgFile,
    changeEcgDate,
  };
}
