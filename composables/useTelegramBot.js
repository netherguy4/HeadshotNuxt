function escapeMarkdownV2(text) {
  return text.replace(/([_\-*\[\]()~`>#+=|{}.!])/g, "\\$1");
}

export default function useTelegramBot() {
  async function send(query) {
    const { name, phone, bullets, date, players, service, total, upgrades } =
      query;
    const text = `Ім'я: ${escapeMarkdownV2(name)}\nТелефон: ${escapeMarkdownV2(phone)}\n\nТип гри: ${service}\nКількість гравців: ${players}\nДата: ${date.split("-").reverse().join("\\.")}\nКількість кульок: ${bullets}\nДодатково: ${upgrades.length > 0 ? upgrades.join(", ") : "Нiчого"}\n\nСума: ${total} грн\\.`;

    return $fetch(`/telegram/sendMessage`, {
      method: "post",
      params: {
        chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
        parse_mode: "MarkdownV2",
        text: text,
      },
    }).catch((err) => {
      return err;
    });
  }

  return { send };
}
