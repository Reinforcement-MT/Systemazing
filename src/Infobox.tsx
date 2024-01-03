import React from 'react';

type InfoboxProps = { infoState: string, onChange: any };
export default function Infobox({ infoState, onChange }: InfoboxProps) {

  return (
    <div id="Infobox">
      <textarea
        id="infobox-text-area"
        placeholder="Enter Details Here"
        value={infoState}
        onChange={onChange}
      />
    </div>
  );
}
