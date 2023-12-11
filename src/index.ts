export const base64ToImageUrl = (base64String: string): string => {
    const blob = base64ToBlob(base64String);
    const url = URL.createObjectURL(blob);

    return url;
};

const base64ToBlob = (base64String: string) => {
    const byteCharacters = atob(base64String);

    // Use Uint8Array.from to create a Uint8Array directly
    const byteArrays = new Uint8Array(Array.from(byteCharacters, char => char.charCodeAt(0)));

    const blob = new Blob([byteArrays], {
        type: "image/png",
    });
    return blob;
};
