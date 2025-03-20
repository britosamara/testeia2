// Configuração do Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Elementos da interface
const loginButton = document.getElementById("loginButton");
const videosButton = document.getElementById("videosButton");
const backButton = document.getElementById("backButton");
const homePage = document.getElementById("home");
const videosPage = document.getElementById("videosPage");
const greeting = document.getElementById("greeting");
const profileIcon = document.getElementById("profileIcon");

// Função de login com Google
loginButton.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
        const user = result.user;
        greeting.textContent = `Olá, ${user.displayName}!`;
        profileIcon.src = "profile2.png";
    }).catch((error) => {
        console.error("Erro no login:", error);
    });
});

// Navegação entre páginas
videosButton.addEventListener("click", () => {
    homePage.classList.add("hidden");
    videosPage.classList.remove("hidden");
});

backButton.addEventListener("click", () => {
    videosPage.classList.add("hidden");
    homePage.classList.remove("hidden");
});