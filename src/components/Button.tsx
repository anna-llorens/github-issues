import './Button.scss';

export const Button = ({ onClick, children }: any): JSX.Element => {
  return <button onClick={onClick}>
    {children}
  </button>;
}