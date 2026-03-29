const statusEl = document.getElementById("status");

function setStatus(text) {
  if (statusEl) statusEl.textContent = text;
}

async function insertEmoji(emoji) {
  try {
    const el = await webflow.getSelectedElement();

    if (!el || !el.textContent) {
      setStatus("Select a text element first.");
      return;
    }

    await el.setTextContent(`${emoji} ${el.textContent || ""}`.trim());
    setStatus("Emoji added to selected text element.");
  } catch (error) {
    console.error(error);
    setStatus("Could not update the selected element.");
  }
}

document.getElementById("smile")?.addEventListener("click", async () => insertEmoji("😊"));
document.getElementById("wink")?.addEventListener("click", async () => insertEmoji("😉"));
document.getElementById("heart")?.addEventListener("click", async () => insertEmoji("😍"));
document.getElementById("cry")?.addEventListener("click", async () => insertEmoji("😭"));
