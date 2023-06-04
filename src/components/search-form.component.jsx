const SearchForm = ({ submitHandler }) => {
  return (
    <form className="text-center mb-12" onSubmit={submitHandler}>
      <input
        className="p-2 rounded shadow focus:outline-none"
        type="search"
        placeholder="Photo's name"
        name="search"
        required
      />
      <button className="rounded py-2 px-4 shadow-md bg-blue-400 text-white">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
