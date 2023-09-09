export default function base64ToBlob(base64: string) {
    // base64 이름, 데이터 나누기 
    // ex) data:image/png;base64,iVBORw0K => ['data:image/png', 'base64,iVBORw0K']
    const block = base64.split(";");
    
    // 타입 나누기
    // data:image/png => ['data', 'image/png']
    const contentType = block[0].split(":")[1];

    // 인코딩된 데이터 가져오기
    // base64,iVBORw0K => ['base64', 'iVBORw0K']
    const realData = block[1].split(",")[1];

    // 가져온 데이터를 blob으로 변환
    const blobData = btoa(realData);

    return new Blob([blobData], { type: contentType });
}
