const login = async (credentials) => {
  try {
    const response = await fetch('your_login_endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Login failed: ' + error.message);
  }
};

export { login };
