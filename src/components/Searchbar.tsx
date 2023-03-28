import React from 'react';

class Searchbar extends React.Component {
  private res = window.localStorage.getItem('SAVE_SEARCH') ?? '';
  state = {
    text: this.res,
  };
  componentWillUnmount(): void {
    window.localStorage.setItem('SAVE_SEARCH', this.res);
  }

  onchange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ text: e.currentTarget.value });
    this.res = e.currentTarget.value;
  };
  render() {
    return (
      <div>
        <form className="catalin">
          <input type="text" value={this.state.text} onInput={this.onchange} className="input" />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
