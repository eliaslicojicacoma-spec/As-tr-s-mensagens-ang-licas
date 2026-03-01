export const requestNotificationPermission = async () => {
  if (!("Notification" in window)) {
    console.log("Este navegador não suporta notificações de desktop");
    return;
  }

  if (Notification.permission === "granted") {
    new Notification("Clarim da Verdade", {
      body: "Você já está conectado para receber novas mensagens proféticas!",
      icon: "/images/logo/icon-192.png"
    });
  } else if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Permissão concedida para notificações.");
    }
  }
};

