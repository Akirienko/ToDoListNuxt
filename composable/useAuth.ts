const client = useSupabaseClient()

export function useAuth() {


  const signIn = async (email: string, password: string) => {
    const { data, error } = await client.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      throw error;
    }

    console.log('data signIn use', data );

    return data.user.user_metadata
  };

  const signUp = async (email: string, password: string, username?: string) => {
    const { data, error } = await client.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username || null
        }
      }
    })

    if (error) {
      throw error;
    }

    return data.user.user_metadata
  };

  const signOut = async () => {
    const { error } = await client.auth.signOut();

    if (error) {
      throw error;
    }
  };

  const getUser = async () => {
    const { data, error } = await client.auth.getUser();

    if (error) {
      throw error;
    }

    return data;
  };

  return {  signIn, signUp, signOut, getUser  };
}