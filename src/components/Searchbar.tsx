import React, { useEffect, useRef, useState } from 'react';

function Searchbar() {
  const [name1, setName] = useState<string>(() => {
    const saved = localStorage.getItem('name');
    return saved || '';
  });

  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    //inputRef.current.focus();
    console.log(inputRef.current);
    // return () => {
    //   const val = JSON.stringify(valueR.cur!.value);
    //   setName(val);
    //   localStorage.setItem('name', val);
    // };
  }, []);

  const onchange = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name1}
        // onMoun={onchange}
        className="input"
        name="input"
        ref={inputRef}
      />
      <button>Send</button>
    </div>
  );
}

export default Searchbar;
