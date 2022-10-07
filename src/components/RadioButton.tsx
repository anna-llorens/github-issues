export const RadioButton = (props: any) => {
  const { changed, id, isSelected, label, value } = props;
  return (
    <span className="RadioButton">
      <input
        id={id}
        onClick={changed}
        onChange={changed}
        value={value}
        type="radio"
        checked={isSelected}
      />
      <label htmlFor={id}>{label}</label>
    </span>
  );
};