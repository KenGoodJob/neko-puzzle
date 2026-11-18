# ねこの脳トレパズル

iPadで遊ぶ、猫がテーマの脳トレパズル(ジグソーパズル・ナンプレ)。

公開ページ:https://kengoodjob.github.io/neko-puzzle/

## 公開するとき
版番号(日本時間の年月日時分秒14桁)を次の3か所でそろえる。
- `app.js` の `APP_VERSION`
- `index.html` の `app.js?v=…`
- `version.json` の `version`

## 猫の写真の許可リスト(`approved.json`)
- アプリは `approved.json` にある写真だけを使う。iPad は写真を読み込み、指紋(SHA-256)が一致したものだけを保存する
- 一覧は管理用の画面(版番号の3秒長押し →「許可リストの管理」)で作り、「一覧をコピー」した内容でこのファイルを置き換える
- 形式:`{"v":1,"next":次の番号,"list":[{"no":番号,"u":"写真のアドレス","h":"SHA-256(16進64字)"}]}`。番号は使い回さない。最大50枚
- アドレスは `https://cdn2.thecatapi.com/images/英数字.jpg|png` か `https://cataas.com/cat/英数字` だけ。キーや個人情報を含めない
