import React, { useEffect, useState } from 'react';

function Searchbar() {
  const [name1, setName] = useState<string>(() => {
    const saved = localStorage.getItem('name');
    return saved || '';
  });

  useEffect(() => {
    localStorage.setItem('name', name1);
  }, [name1]);

  const onchange = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  return (
    <div>
      <form className="catalin">
        <input type="text" value={name1} onInput={onchange} className="input" name="input" />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Searchbar;
