export const TodoSearch = () => {
  const onSearchValueChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="w-full h-8 my-5 flex justify-center">
      <input
        className="rounded-lg h-8 p-3"
        type="text"
        placeholder="Escribe un todo"
        onChange={onSearchValueChange}
      />
    </div>
  );
};
