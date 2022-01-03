import { Auth } from "aws-amplify";

const signIn = async (email: string, password: string) => {
  try {
    const response = await Auth.signIn(email, password);
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const signUp = async (username: string, password: string) => {
  try {
    const response = await Auth.signUp({ username, password });
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const confirmSignUp = async (email: string, code: string) => {
  try {
    const response = await Auth.confirmSignUp(email, code, {
      forceAliasCreation: true,
    });
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const signOut = async () => {
  try {
    const response = await Auth.signOut();
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const checkAuth = async () => {
  try {
    const response = await Auth.currentAuthenticatedUser();
    const { attributes, signInUserSession } = response;
    return { attributes, jwtToken: signInUserSession.accessToken.jwtToken };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { signIn, signOut, checkAuth, signUp, confirmSignUp };
