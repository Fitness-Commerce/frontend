export default function base64toFile(base_data: string, filename: string) {
    // base64 이름, 데이터 나누기
    // ex) data:image/png;base64,iVBORw0K => ['data:image/png', 'base64,iVBORw0K']
    const [mime, base64] = base_data.split(";");

    // 타입 나누기
    // data:image/png => ['data', 'image/png']
    const mimeType = mime.split(":")[1];

    // base64를 uint8Array로 변환
    const bstr = atob(base64.split(",")[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    // 파일 이름 + 확장자
    const ex = mimeType.split('/')[1];
    const name = `${filename}.${ex}`

    return new File([u8arr], name, { type: mimeType });
}
