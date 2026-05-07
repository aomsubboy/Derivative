const STORAGE_KEY = "aomsub_world_gateway_session";

const USERS = [
  {
    username: "Chaiwat Saetang",
    password: "You are my hero!",
    displayName: "Chaiwat Saetang",
    access: "family",
    landing: "/family",
  },
  {
    username: "Napawan Phungphugdee",
    password:
      "You are My mother is one of the most talented people I've ever met Super mom",
    displayName: "Napawan Phungphugdee",
    access: "family",
    landing: "/family",
  },
  {
    username: "Pink",
    password: "Narak Tee Sud Nairok",
    displayName: "Pink",
    access: "partner",
    landing: "/partner",
  },
  {
    username: "Aomsub",
    password: "hero",
    displayName: "Aomsub",
    access: "admin",
    landing: "/gateway",
  },
];

export function authenticate(username, password) {
  const normalizedUsername = username.trim().toLowerCase();

  return USERS.find(
    (user) =>
      user.username.toLowerCase() === normalizedUsername &&
      user.password === password,
  );
}

export function saveSession(user) {
  const session = {
    displayName: user.displayName,
    username: user.username,
    access: user.access,
    landing: user.landing,
    issuedAt: Date.now(),
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  return session;
}

export function getSession() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearSession() {
  window.localStorage.removeItem(STORAGE_KEY);
}
