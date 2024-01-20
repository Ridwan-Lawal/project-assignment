import { useState } from "react";
import { Input } from "./Input";

export function AppForms() {
  const [formType, setFormType] = useState("Login");
  // for sign up
  const [name, setName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // for login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  function handleFormType(formName) {
    setFormType(formName);
  }

  return (
    <>
      {/* Registration Form */}
      {formType === "Create an Account" && (
        <Form
          formButtonText="Create an Account"
          formType="Create an Account"
          haveAnAccount="Already have an Account?"
          haveAnAccountButton="Login"
          emailValue={newEmail}
          emailOnChange={(e) => setNewEmail(e.target.value)}
          onFormType={handleFormType}
        >
          <Input
            type="text"
            placeholder="Enter Name"
            inputName="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter Password"
            inputName="Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form>
      )}

      {formType === "Login" && (
        <Form
          formButtonText="Login"
          formType="Login"
          haveAnAccount="Don't have an Account?"
          haveAnAccountButton="Create an Account"
          emailValue={loginEmail}
          emailOnChange={(e) => setLoginEmail(e.target.value)}
          onFormType={handleFormType}
        >
          <div>
            <Input
              type="password"
              placeholder="Enter Password"
              inputName="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <p
              onClick={() => handleFormType("forgot password")}
              className="text-xs text-right text-red-800 cursor-pointer hover:underline"
            >
              Forgot Password?
            </p>
          </div>
        </Form>
      )}

      {formType === "forgot password" && (
        <Form
          formButtonText="Send Reset Link"
          formType="Forgot Password"
          haveAnAccount="I remember my password"
          haveAnAccountButton="Login"
          emailValue={loginEmail}
          emailOnChange={(e) => setLoginEmail(e.target.value)}
          passwordValue={loginPassword}
          passwordOnChange={(e) => setLoginPassword(e.target.value)}
          onFormType={handleFormType}
        />
      )}
    </>
  );
}
function Form({
  formButtonText = "Button",
  haveAnAccount = "have an Account",
  haveAnAccountButton = "button",
  formType = "Form",
  children,
  emailValue,
  emailOnChange,
  passwordValue,
  passwordOnChange,
  onFormType,
}) {
  return (
    <div className="py-8 bg-gray-50">
      <form className="py-5  px-8 max-w-[410px] mx-auto rounded-md shadow-lg space-y-5 bg-white ">
        <p className="text-slate-900 text-2xl font-semibold text-center">
          {formType}
        </p>

        <Input
          type="text"
          placeholder="Email address..."
          inputName="Email address"
          value={emailValue}
          onChange={emailOnChange}
        />
        {children}

        {/* submit button */}
        <FormButton text={formButtonText} />

        <p className="text-xs text-gray-400 text-center">
          By signing in you accept our terms and conditions & privacy policy
        </p>
      </form>

      {/* If you hve an accoung component instance */}
      <HaveAnAccount text={haveAnAccount}>
        <FormButton
          text={haveAnAccountButton}
          onClick={() => onFormType(haveAnAccountButton)}
          bgColor="bg-white hover:bg-pink-600 hover:text-white border border-pink-500"
          textColor="text-pink-600"
        />
      </HaveAnAccount>
    </div>
  );
}
function HaveAnAccount({ buttonText = "Button", text = "Account", children }) {
  return (
    <div className="space-y-2 max-w-[410px] mx-auto px-8 text-center text-gray-500 mt-5">
      <p className="text-[13px]">{text}</p>
      {children}
    </div>
  );
}
function FormButton({
  text = "button",
  bgColor = "bg-green-600 hover:bg-green-950",
  textColor = "text-white",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`text  ${textColor} ${bgColor} text-sm font-semibold w-full py-2.5 rounded-md  transition-color duration-300`}
    >
      {text}
    </button>
  );
}
