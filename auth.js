// Google login
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then(result => {
      console.log("User logged in:", result.user.email);
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
}

// Logout
function logout() {
  auth.signOut().then(() => {
    window.location.href = "login.html";
  });
}
