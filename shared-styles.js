import {css} from 'lit';

export const styles = css`
  :host {
    display: block;
    border-radius: 24px;
    padding: 24px;
    margin-block: 16px;
    background-color: var(--md-sys-color-primary-container);
    color: var(--md-sys-color-on-primary-container);
    color: blue;
  }
    
  :host > :first-child {
    margin-block-start: 0;  
  }
    
  :host > :last-child {
    margin-block-end: 0;  
  }
    
  a {
    color: inherit;  
  }`;
