const config = window.APP_CONFIG ?? {};
document.querySelector("#app-title").textContent = config.title ?? "Kubernetes Homework";
document.querySelector("#frontend-version").textContent = config.frontendVersion ?? "unknown";

async function loadBackendInfo() {
  const response = await fetch("/api/visits", { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Backend returned HTTP ${response.status}`);
  }

  const data = await response.json();
  document.querySelector("#backend-version").textContent = data.version ?? "unknown";
  document.querySelector("#backend-pod").textContent = data.pod ?? "unknown";
  document.querySelector("#visits").textContent = data.total ?? "unknown";
  document.querySelector("#error").textContent = "";
}

async function refresh() {
  try {
    await loadBackendInfo();
  } catch (error) {
    console.error(error);
    document.querySelector("#error").textContent = `Ошибка: ${error.message}`;
  }
}

document.querySelector("#refresh").addEventListener("click", refresh);
refresh();
