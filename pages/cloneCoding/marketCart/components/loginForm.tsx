const LoginForm = () => {
  return (
    <div>
      <form className="shadow-s flex flex-col space-y-2 rounded-2xl bg-white p-8 focus-within:bg-blue-100">
        <input
          type="text"
          required
          placeholder="Username"
          className="peer rounded-md border border-gray-400 p-1"
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid.
        </span>
        <span className="hidden peer-valid:block peer-valid:text-teal-500">
          Awesome username.
        </span>
        <span className="hidden peer-hover:block peer-hover:text-amber-500">
          Hello
        </span>
        <input type="submit" value="login" className="bg-white" />
      </form>
    </div>
  );
};

export default LoginForm;
