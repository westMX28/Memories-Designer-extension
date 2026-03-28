const COPY = {
  heroHeadline: "Turn your memories into something beautiful.",
  heroSubheadline:
    "Upload your photos and a few details, and Memories creates a personalised preview you can review before purchasing.",
  ctaPrimary: "Create your memory",
  ctaSecondary: "How it works",
};

const statusEl = document.getElementById("status");
const customTextEl = document.getElementById("custom-text");

function setStatus(text) {
  if (statusEl) statusEl.textContent = text;
}

async function applyText(text) {
  try {
    const el = await webflow.getSelectedElement();

    if (!el || !el.textContent) {
      setStatus("Select a text element first.");
      return;
    }

    await el.setTextContent(text);
    setStatus("Applied to selected text element.");
  } catch (error) {
    console.error(error);
    setStatus("Could not update the selected element.");
  }
}

document.getElementById("hero-headline")?.addEventListener("click", async () => {
  await applyText(COPY.heroHeadline);
});

document.getElementById("hero-subheadline")?.addEventListener("click", async () => {
  await applyText(COPY.heroSubheadline);
});

document.getElementById("cta-primary")?.addEventListener("click", async () => {
  await applyText(COPY.ctaPrimary);
});

document.getElementById("cta-secondary")?.addEventListener("click", async () => {
  await applyText(COPY.ctaSecondary);
});

document.getElementById("apply-custom")?.addEventListener("click", async () => {
  const value = customTextEl?.value?.trim();
  if (!value) {
    setStatus("Enter custom text first.");
    return;
  }

  await applyText(value);
});
