import { useState, useCallback } from 'react';

type InfoboxProps = { setCustomData: Function };
export default function Infobox({ setCustomData }: InfoboxProps) {

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (evt) => { setCustomData(evt.target.value); },
    []
  );

  return (
    <div id="Infobox">
      <textarea
        id="infobox-text-area"
        placeholder="Enter Details Here"
        onChange={onChange}
      />
    </div>
  );
}
