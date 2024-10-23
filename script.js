// LIFFの初期化
liff.init({ liffId: 'YOUR_LIFF_ID' }) // ここにLIFF IDを挿入
.then(() => {
    // ユーザーがログインしているか確認
    if (!liff.isLoggedIn()) {
        liff.login(); // ログインしていない場合はログインを促す
    } else {
        return liff.getProfile(); // プロフィール情報を取得
    }
})
.then(profile => {
    // プロフィール情報を表示
    document.getElementById('profile').innerHTML = `
        <p>名前: ${profile.displayName}</p>
        <img src="${profile.pictureUrl}" alt="プロフィール画像" width="100">
        <p>ユーザーID: ${profile.userId}</p>
    `;
})
.catch(err => {
    console.error('プロフィールの取得に失敗しました:', err);
    document.getElementById('profile').innerHTML = '<p>ユーザー情報を取得できませんでした。</p>';
});
