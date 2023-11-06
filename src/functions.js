import axios from 'axios';

export const metadata = {
  title: 'Web5 University',
  description: 'Get Your Blockchain Courses',
}

const PUBLIC_API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT

export const fetchData = async (username, tokenid) => {
  let response;
  try {
    response = await axios.get(`/api/getUser`, {
      params: {
        username: username,
        tokenid: tokenid
      }
    });
    if (response.data) {
      await logIn(username);
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return response;
  }
};

export const levelUp = async (username, lessonNumber) => {
  const url = new URL(`${PUBLIC_API_ENDPOINT}/api/levelUp`);
  url.searchParams.append('username', username);
  url.searchParams.append('levelNumber', lessonNumber);
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log('API response:', data);
    } else {
      console.error('API request failed:', response.statusText);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

export const signin = async (email, password) => {
  console.log(email, password)
  try {
    const response = await fetch(`/api/signIn?email=${email}&password=${password}`);
    return response.json();
  } catch (error) {
    return { "error": error };
  }
};

export const logIn = async (username) => {
  const url = new URL(`${PUBLIC_API_ENDPOINT}/api/logIn`);
  url.searchParams.append('username', username);

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log('Logged in:', data);
    } else {
      console.error('Log in failed:', response.statusText);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

export const getUserProgress = async (username) => {
  const url = new URL(`${PUBLIC_API_ENDPOINT}/api/getUserProgress`);
  url.searchParams.append('username', username);

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data.existingUser
    } else {
      console.error('User Not Found');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

export const updateUserProgress = async (username, levelNumber, percentage) => {
  const url = new URL(`${PUBLIC_API_ENDPOINT}/api/updateUserProgress`);
  url.searchParams.append('username', username);
  url.searchParams.append('levelNumber', levelNumber);
  url.searchParams.append('percentage', percentage);

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      // console.log('API response:', data);
    } else {
      // console.error('API request failed:', response.statusText);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

export const sessionUp = async (username, module, level) => {
  console.log("Session UP", username, module, level)

  const url = new URL(`${PUBLIC_API_ENDPOINT}/api/updateNestedLesson`);
  url.searchParams.append('username', username);
  url.searchParams.append('module', module);
  url.searchParams.append('level', level);

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log('API response:', data);
    } else {
      console.error('API request failed:', response.statusText);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

export const getAllQuestions = async (subject) => {
  const url = new URL(`${PUBLIC_API_ENDPOINT}/api/getQuestionSubjectWise`);
  url.searchParams.append('subject', subject);

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      return data.questions
    } else {
      console.error('Data Not Found');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};