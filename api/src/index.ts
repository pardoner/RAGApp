import axios from 'axios';

async function loadPdfFromUrl(url: string): Promise<Buffer> {
    const response = await axios.get(url, {
        responseType: 'arraybuffer',
    });
    return Buffer.from(response.data);
}

async function main ({
    paperUrl,
    name, 
    pagesToDelete,

}: {
    paperUrl: string,
    name: string,
    pagesToDelete?: number[]
}) {
    if (!paperUrl.endsWith("pdf")) {
        throw new Error("Not a PDF");
    }
    const pdfAsBuffer = await loadPdfFromUrl(paperUrl)
}
