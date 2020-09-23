const END_POINTS = {
  baseURL: 'http://127.0.0.1:8000/',

  userLogin: '/users/login',
  userSignUp: '/users',
  getUserProfile: '/users/me',
  getUserPicture: '/users/avatar/',
  userLogout: '/users/logout',
  userLogoutAllSessions: '/users/logoutAll',
  // For getting and posting.
  tasks: '/tasks',
  // Upload Task Files.
  uploadPreImages: '/tasks/preTaskImages/',
  // For updating and deletion.
  updateTaskById: '/tasks/',
};

export default END_POINTS;
