export default function Button({
  form,
  setForm,
  handleSubmit,
  login,
}: {
  form: number;
  setForm: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: any;
  login?: boolean;
}) {
  return (
    <button
      onClick={() => (form === 0 ? setForm(1) : handleSubmit())}
      className="py-2 text-[rgba(255,255,255,0.89)] font-[500]  bg-[#0D6FDD] w-full rounded-md  "
    >
      {form === 0 ? 'Continue' : login ? 'Log in' : 'Sign up'}
    </button>
  );
}
