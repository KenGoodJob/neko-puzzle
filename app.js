/* ====== 版番号 ====== */
// 上書き公開のたびに、公開時刻(日本時間・年月日時分秒の14桁)へ更新する。
// index.html の app.js?v=… と version.json も同じ値にそろえる
const APP_VERSION='20261117025417';
// 公開ページのURL(新しい版のお知らせの「更新する」で開き直す)
const APP_URL='https://kengoodjob.github.io/neko-puzzle/';
document.querySelectorAll('.ver').forEach(e=>{e.textContent='v'+APP_VERSION;});

/* ====== 文字の表記(0=漢字 / 1=ひらがな) ====== */
// [漢字, ひらがな] の組。画面への反映は必ず textContent で行う
const T={
  lang:['文字','もじ'],
  menuLead:['数独を解くと、新しい猫が出てきます。ジグソーパズルは、出た猫やイラストを選んで遊べます','すうどくを とくと、あたらしい ねこが でてきます。ジグソーパズルは、でた ねこや イラストを えらんで あそべます'],
  sdCardT:['🔢 数独で新しい猫を出す','🔢 すうどくで あたらしい ねこを だす'],
  sdcLimit:['今日の新しい猫はおしまい(明日また出ます)','きょうの あたらしい ねこは おしまい(あした また でます)'],
  sdcNone:['新しい猫は準備中です','あたらしい ねこは じゅんびちゅう です'],
  sdmNew:['解くと、新しい猫が出てきます。3×3の9マスを埋めて「🐱 絵を見る」を押すと、少しずつ見えてきます','とくと、あたらしい ねこが でてきます。3×3の 9マスを うめて「🐱 えを みる」を おすと、すこしずつ みえてきます'],
  sdmLimit:['今日の新しい猫はおしまいです。出た猫の中から1匹で遊びます(明日また新しい猫が出ます)','きょうの あたらしい ねこは おしまい です。でた ねこの なかから 1ぴきで あそびます(あした また あたらしい ねこが でます)'],
  sdmNone:['新しい猫は準備中です。出た猫の中から1匹で遊びます','あたらしい ねこは じゅんびちゅう です。でた ねこの なかから 1ぴきで あそびます'],
  sdmIllust:['猫の写真は準備中です。イラストの中から1枚で遊びます','ねこの しゃしんは じゅんびちゅう です。イラストの なかから 1まいで あそびます'],
  sdNewCat:['🐱 新しい猫が出ました!','🐱 あたらしい ねこが でました!'],
  selPic:['選んだ絵','えらんだ え'],
  usePic:['この絵で遊びます','この えで あそびます'],
  zoom:['🔍 大きく見る','🔍 おおきく みる'],
  hAlb:['🎁 ごほうびの絵','🎁 ごほうびの え'],
  albEmpty:['猫の写真のパズルをクリアすると、ここに入ります','ねこの しゃしんの パズルを クリアすると、ここに はいります'],
  albDel:['🗑 この絵を消す','🗑 この えを けす'],
  albDelP:['ごほうびの絵から消えます(また同じ写真でクリアすると、もう一度入ります)','ごほうびの えから きえます(また おなじ しゃしんで クリアすると、もういちど はいります)'],
  saveGuide:['押したあとの画面で「画像を保存」を選ぶと、写真アプリに入ります','おした あとの がめんで「がぞうを ほぞん」を えらぶと、しゃしん アプリに はいります'],
  gift:['🎁 ごほうびの絵に入れました','🎁 ごほうびの えに いれました'],
  usePicSd:['3×3の9マスを埋めて「🐱 絵を見る」を押すと、この絵が見えてきます','3×3の 9マスを うめて「🐱 えを みる」を おすと、この えが みえてきます'],
  sdPicBtn:['🐱 絵を見る','🐱 えを みる'],
  sdPicNone:['9マスとも埋まった3×3がありません','9マス ぜんぶ うまった 3×3が ありません'],
  sdPicNo:['まだ絵は出ません','まだ えは でません'],
  savePic:['📥 iPadに保存','📥 iPadに ほぞん'],
  savePicDone:['📥 この絵をiPadに保存','📥 この えを iPadに ほぞん'],
  saveHint:['絵を長押しして「写真に追加」でも保存できます','えを ながおしして「しゃしんに ついか」でも ほぞん できます'],
  saveNo:['この絵は保存できません','この えは ほぞん できません'],
  menu:['◀ メニュー','◀ メニュー'],
  gJig:['ジグソーパズル','ジグソーパズル'],gJigD:['絵を組み立てる','えを くみたてる'],
  gSd:['数独','すうどく'],gSdD:['数字を入れる','すうじを いれる'],
  hPic:['🧩 ジグソーパズルの絵を選ぶ','🧩 ジグソーパズルの えを えらぶ'],
  hCnt:['① ピースの数','① ピースの かず'],
  hRot:['② ピースの向き','② ピースの むき'],
  go:['始める','はじめる'],
  back:['◀ 戻る','◀ もどる'],
  mihon:['見本','みほん'],
  hint:['ヒント','ヒント'],
  edge:['ふちだけ','ふちだけ'],
  set:['設定','せってい'],
  left1:['残り','のこり'],
  left2:['枚','まい'],
  close:['閉じる','とじる'],
  guide:['台に薄く絵を出す','だいに うすく えを だす'],
  mini:['小さい見本を出す','ちいさい みほんを だす'],
  sound:['音','おと'],
  quitQ:['パズルをやめますか?','パズルを やめますか?'],
  quitP:['途中までの続きは残ります。次は「続きから」で遊べます','とちゅうまでの つづきは のこります。つぎは「つづきから」で あそべます'],
  quitP0:['やめると、途中の続きは残りません','やめると、とちゅうの つづきは のこりません'],
  jgHNew:['新しく始める','あたらしく はじめる'],
  jgNewQ:['新しく始めますか?','あたらしく はじめますか?'],
  jgNewP:['途中のパズルは消えます','とちゅうの パズルは きえます'],
  quitNo:['続ける','つづける'],
  quitYes:['やめる','やめる'],
  done:['完成!','かんせい!'],
  other:['他の絵にする','ほかの えに する'],
  again:['もう一度','もういちど'],
  photo:['写真を使う','しゃしんを つかう'],
  photoNm:['iPadの写真','iPadの しゃしん'],
  photoN:['写真','しゃしん'],
  // 猫の写真(インターネットから取得)
  hCat:['出た猫','でた ねこ'],
  hIllust:['イラスト・iPadの写真','イラスト・iPadの しゃしん'],
  catRep:['🔄 この写真を入れ替える','🔄 この しゃしんを いれかえる'],
  catRepBusy:['入れ替えています…','いれかえています…'],
  catRepHelp:['写真を選ぶと、入れ替えたり消したりできます','しゃしんを えらぶと、いれかえたり けしたり できます'],
  catDel:['🗑 この写真を消す','🗑 この しゃしんを けす'],
  catDelQ:['この写真を消しますか?','この しゃしんを けしますか?'],
  catDelP:['消した写真は、もう出てきません','けした しゃしんは、もう でてきません'],
  catDelNo:['消さない','けさない'],
  catDelYes:['消す','けす'],
  catDelDone:['写真を消しました','しゃしんを けしました'],
  catAdd:['写真を足す','しゃしんを たす'],
  catEmpty:['空き','あき'],
  catAddFail:['写真を足せませんでした','しゃしんを たせませんでした'],
  catRepDone:['今日の入れ替えはここまでです。明日また入れ替えられます','きょうの いれかえは ここまで です。あした また いれかえられます'],
  catRepFail:['写真を入れ替えられませんでした','しゃしんを いれかえられませんでした'],
  catWait:['読み込み中…','よみこみちゅう…'],
  catNg1:['読み込めませんでした','よみこめませんでした'],
  catNg2:['タップで読み直す','タップで よみなおす'],
  catNotReady:['この写真はまだ読み込めていません。少し待つか、別の絵を選んでください','この しゃしんは まだ よみこめていません。すこし まつか、べつの えを えらんでください'],
  // 写真そのものを保存できない写真(取得元が持ち出しを許可していない)
  noGift:['この写真は、クリアしても「ごほうびの絵」に入りません。完成画面で絵を長押しすると、写真アプリに保存できます。','この しゃしんは、クリアしても「ごほうびの え」に はいりません。かんせい がめんで えを ながおしすると、しゃしん アプリに ほぞん できます。'],
  noGiftSd:['途中でやめて「続きから」で遊ぶと、絵はイラストに変わります','とちゅうで やめて「つづきから」で あそぶと、えは イラストに かわります'],
  noGiftJg:['途中でやめると、続きは残りません','とちゅうで やめると、つづきは のこりません'],
  lpHint:['絵を長押しして「写真に追加」でも保存できます','えを ながおしして「しゃしんに ついか」でも ほぞん できます'],
  lpOnly:['この写真は、絵を長押しして「写真に追加」を選ぶと、写真アプリに入ります(ごほうびの絵には入りません)','この しゃしんは、えを ながおしして「しゃしんに ついか」を えらぶと、しゃしん アプリに はいります(ごほうびの えには はいりません)'],
  admAskQ:['管理用の設定を開きますか?','かんりようの せっていを ひらきますか?'],
  admAskP:['ふだんは使いません。「開かない」を押してください','ふだんは つかいません。「ひらかない」を おしてください'],
  admAskNo:['開かない','ひらかない'],admAskYes:['開く','ひらく'],
  apvNone:['猫の写真は準備中です。下のイラストで遊べます','ねこの しゃしんは じゅんびちゅう です。したの イラストで あそべます'],
  apvAdd:['+ 写真を足す','+ しゃしんを たす'],
  apvAddDone:['今日はここまでです。明日また足せます','きょうは ここまで です。あした また たせます'],
  apvNoMore:['新しい写真は、まだありません','あたらしい しゃしんは、まだ ありません'],
  apvClearHelp:['数独をクリアすると、新しい猫が出ます','すうどくを クリアすると、あたらしい ねこが でます'],
  apvOpen1:['▼ 前の写真も見る','▼ まえの しゃしんも みる'],
  apvClose:['▲ 前の写真をたたむ','▲ まえの しゃしんを たたむ'],
  admApvSt:['許可リスト','きょか リスト'],
  admApvBtn:['📋 許可リストの管理','📋 きょか リストの かんり'],
  admReset:['0に戻す','0に もどす'],
  admTest:['テスト用のボタン','テストようの ボタン'],
  apvH:['許可リストの管理','きょか リストの かんり'],
  apvCurH:['公開中の写真(タップで大きく見て「外す」)','こうかいちゅうの しゃしん(タップで おおきく みて「はずす」)'],
  apvCandH:['候補(タップで大きく見て「許可」)','こうほ(タップで おおきく みて「きょか」)'],
  apvFind:['🔍 候補を探す','🔍 こうほを さがす'],
  apvFinding:['探しています…','さがしています…'],
  apvP1:['① 候補を集めています','① こうほを あつめています'],
  apvP2:['② 写真を確かめています','② しゃしんを たしかめています'],
  apvPFound:['見つかった写真','みつかった しゃしん'],
  apvPWait:['数分かかります。この画面のままお待ちください','すうふん かかります。この がめんの まま おまちください'],
  apvCopy:['📋 一覧をコピー','📋 いちらんを コピー'],
  apvCopied:['コピーしました。Claudeのチャットに貼り付けてください','コピー しました。Claudeの チャットに はりつけてください'],
  apvCopyNg:['コピーできませんでした。下の欄を長押しして全部を選び、コピーしてください','コピー できませんでした。したの らんを ながおしして ぜんぶを えらび、コピー してください'],
  apvDraftDel:['下書きを消す','したがきを けす'],
  apvRm:['外す','はずす'],apvOk:['許可','きょか'],
  apvZCur:['番(公開中)','ばん(こうかいちゅう)'],apvZCand:['候補','こうほ'],
  apvZRmOn:['外す予定です','はずす よてい です'],apvZRmOff:['公開中のままです','こうかいちゅうの まま です'],
  apvZOkOn:['許可する予定です','きょかする よてい です'],apvZOkOff:['まだ許可していません','まだ きょか していません'],
  apvZRm:['外す','はずす'],apvZRmNo:['外すのをやめる','はずすのを やめる'],
  apvZOk:['✓ 許可する','✓ きょかする'],apvZOkNo:['許可をやめる','きょかを やめる'],
  apvOrdH:['許可する写真の順番(上から先に出ます)','きょかする しゃしんの じゅんばん(うえから さきに でます)'],
  apvZPrev:['◀ 前','◀ まえ'],apvZNext:['次 ▶','つぎ ▶'],
  qH:['画質','がしつ'],q0:['よい','よい'],q1:['ふつう','ふつう'],q2:['あらめ','あらめ'],
  apvNoChange:['変更はありません','へんこうは ありません'],
  testFill:['🛠 答えを埋める(テスト用)','🛠 こたえを うめる(テストよう)'],
  testJg:['🛠 全部はめる(テスト用)','🛠 ぜんぶ はめる(テストよう)'],
  catLoading:['猫の写真を読み込んでいます。少しお待ちください','ねこの しゃしんを よみこんでいます。すこし おまちください'],
  catCredit:['写真:The Cat API / cataas','しゃしん:The Cat API / cataas'],
  hFlip:['③ 絵の向き','③ えの むき'],
  f0:['そのまま','そのまま'],f0d:['見たとおり','みた とおり'],
  f1:['左右反転','さゆう はんてん'],f1d:['鏡に映した絵','かがみに うつした え'],
  catFail:['猫の写真を読み込めませんでした。下のイラストで遊べます','ねこの しゃしんを よみこめませんでした。したの イラストで あそべます'],
  lead:['ピースの数を選んで始めてください','ピースの かずを えらんで はじめてください'],
  c2:['とても簡単','とても かんたん'],c3:['簡単','かんたん'],c4:['普通','ふつう'],c5:['やや難しい','やや むずかしい'],
  c6:['難しい','むずかしい'],c7:['とても難しい','とても むずかしい'],c8:['達人','たつじん'],
  r0:['そろっている','そろっている'],r0d:['向きはそのまま','むきは そのまま'],
  r1:['ばらばら','ばらばら'],r1d:['触ると回る','さわると まわる'],
  // 数独
  sdLead:['難しさを選んで始めてください','むずかしさを えらんで はじめてください'],
  sdCont:['▶ 続きから','▶ つづきから'],
  sdHLv:['難しさ','むずかしさ'],sdHNew:['新しい問題','あたらしい もんだい'],
  s0:['普通','ふつう'],s1:['やや難しい','やや むずかしい'],s2:['難しい','むずかしい'],s3:['達人','たつじん'],
  s0d:['まずはここから','まずは ここから'],s1d:['少し考える','すこし かんがえる'],s2d:['よく考える','よく かんがえる'],s3d:['とても難しい','とても むずかしい'],
  sdLeft2:['マス','マス'],
  sdMemo:['✏️ メモ','✏️ メモ'],sdErase:['消す','けす'],sdUndo:['↶ 取り消し','↶ とりけし'],
  sdErr:['間違いを赤く出す','まちがいを あかく だす'],sdSame:['同じ数字に色を付ける','おなじ すうじに いろを つける'],
  sdNewQ:['新しい問題を始めますか?','あたらしい もんだいを はじめますか?'],
  sdNewP:['途中の問題は消えます','とちゅうの もんだいは きえます'],
  sdNewNo:['続きを遊ぶ','つづきを あそぶ'],sdNewYes:['新しく始める','あたらしく はじめる'],
  sdAgain:['もう一問','もう いちもん'],sdOther:['難しさを変える','むずかしさを かえる'],
  sdMaking:['問題を作っています…','もんだいを つくっています…'],
  sdNotYet:['合っていないマスがあります','あっていない マスが あります'],
  sdRecH:['記録のある問題','きろくの ある もんだい'],
  sdFavH:['★ 残す問題','★ のこす もんだい'],sdRecentH:['最近の問題','さいきんの もんだい'],
  sdFav:['★ この問題を残す','★ この もんだいを のこす'],sdFavS:['残す','のこす'],
  sdRetry:['同じ問題にもう一度','おなじ もんだいに もういちど'],
  sdNewRec:['🏆 新記録!','🏆 しんきろく!'],
  sdFirst:['初めてのクリアです','はじめての クリアです'],
  sdBest:['最高記録','さいこう きろく'],sdPrev:['これまでの最高','これまでの さいこう'],
  sdPlayGo:['▶ 遊ぶ','▶ あそぶ'],
  sdFavFull:['★は30問までです','★は 30もんまで です'],
  // 新しい版のお知らせ
  updT:['新しい版があります','あたらしい はんが あります'],
  updV:['最新の版','さいしんの はん'],
  updBtn:['更新する','こうしんする'],
  updNote:['反応しないときは、アプリを上にスワイプして終了し、開き直してください。','はんのうしない ときは、アプリを うえに スワイプして しゅうりょうし、ひらきなおして ください。'],
  // 管理用の設定(開発者が使う)
  admH:['管理用の設定','かんりようの せってい'],
  admP:['The Cat API のキー','The Cat API の キー'],
  admSet:['キー:設定済み','キー:せっていずみ'],admUnset:['キー:未設定','キー:みせってい'],
  admSave:['保存する','ほぞんする'],admDel:['キーを消す','キーを けす'],
  admSaved:['保存しました','ほぞんしました'],admDeleted:['消しました','けしました'],
  admBad:['キーの形式が正しくありません','キーの けいしきが ただしく ありません'],
  admSrc:['前回の写真の取得元','ぜんかいの しゃしんの しゅとくもと'],
  admLim:['新しい猫(1日)','あたらしい ねこ(1にち)'],
  admUsed:['今日出た新しい猫','きょう でた あたらしい ねこ'],
  admInit:['解放を最初に戻す(テスト用)','かいほうを さいしょに もどす(テストよう)'],
  admInit2:['もう一度押すと戻します','もういちど おすと もどします'],
  admInitP:['出た猫を最初の6枚に、今日の数を0に戻し、消した写真も元に戻します','でた ねこを さいしょの 6まいに、きょうの かずを 0に もどし、けした しゃしんも もとに もどします'],
  admInitDone:['最初に戻しました','さいしょに もどしました'],
  admSrcNone:['まだ取得していません','まだ しゅとく していません'],
  admSrcFail:['取得できませんでした(サンプルのみ)','しゅとく できませんでした(サンプルのみ)'],
  admDb:['iPad内の保存場所','iPadないの ほぞんばしょ'],admDbOk:['使えます','つかえます'],admDbNg:['開けませんでした','ひらけませんでした'],
};
const LANG_KEY='jigsaw-kana';
let kana=0;
try{kana=localStorage.getItem(LANG_KEY)==='1'?1:0;}catch(e){}
const t=k=>(T[k]||['',''])[kana];
// ひらがなの「分」の読み(1・3・4・6・8・0で終わると「ぷん」)
const fun=m=>[0,1,3,4,6,8].includes(m%10)?'ぷん':'ふん';
function doneText(sec){
  const mm=Math.floor(sec/60),ss=sec%60;
  return kana?`よくできました。かかった じかんは ${mm?mm+fun(mm)+' ':''}${ss}びょう です`
             :`よくできました。かかった時間は${mm?mm+'分':''}${ss}秒です`;
}

/* ====== サンプルの猫イラスト(SVG・オリジナル) ====== */
function cat(o){
  const id='cl'+Math.random().toString(36).slice(2,8);
  const L=o.line, sh=`<polygon points="-80,-118 -64,-212 -6,-160"/><polygon points="80,-118 64,-212 6,-160"/><ellipse cx="0" cy="70" rx="105" ry="95"/><circle cx="0" cy="-80" r="85"/>`;
  const st=o.stripes?`<g stroke="${o.dark}" stroke-width="8" stroke-linecap="round" fill="none">
    <path d="M-16 -152 L-12 -126"/><path d="M0 -160 L0 -128"/><path d="M16 -152 L12 -126"/>
    <path d="M-84 -88 L-58 -84"/><path d="M-84 -68 L-60 -70"/><path d="M84 -88 L58 -84"/><path d="M84 -68 L60 -70"/>
    <path d="M-100 30 Q-80 42 -66 26"/><path d="M-104 72 Q-82 84 -68 68"/><path d="M100 30 Q80 42 66 26"/><path d="M104 72 Q82 84 68 68"/></g>`:'';
  const eye=x=>`<ellipse cx="${x}" cy="-88" rx="14" ry="18" fill="${o.eye}" stroke="${L}" stroke-width="2"/><ellipse cx="${x}" cy="-87" rx="5" ry="13" fill="#222"/><circle cx="${x+5}" cy="-95" r="4.5" fill="#fff"/>`;
  return `<g transform="translate(${o.x} ${o.y}) rotate(${o.tilt||0}) scale(${o.s})">
  <path d="M80 120 C175 130 185 30 150 -20" fill="none" stroke="${L}" stroke-width="38" stroke-linecap="round"/>
  <path d="M80 120 C175 130 185 30 150 -20" fill="none" stroke="${o.tail||o.fur}" stroke-width="28" stroke-linecap="round"/>
  <defs><clipPath id="${id}">${sh}</clipPath></defs>
  <g fill="${o.fur}" stroke="${L}" stroke-width="5">${sh}</g>
  <g clip-path="url(#${id})">${o.patches||''}</g>
  <ellipse cx="0" cy="95" rx="60" ry="62" fill="${o.belly}"/>
  <polygon points="-62,-138 -58,-190 -26,-158" fill="#F7A9B5"/><polygon points="62,-138 58,-190 26,-158" fill="#F7A9B5"/>
  ${st}
  <ellipse cx="-38" cy="158" rx="32" ry="19" fill="${o.belly}" stroke="${L}" stroke-width="4"/>
  <ellipse cx="38" cy="158" rx="32" ry="19" fill="${o.belly}" stroke="${L}" stroke-width="4"/>
  ${eye(-32)}${eye(32)}
  <circle cx="-58" cy="-54" r="13" fill="#F7A9B5" opacity=".5"/><circle cx="58" cy="-54" r="13" fill="#F7A9B5" opacity=".5"/>
  <path d="M-10 -60 L10 -60 L0 -48 Z" fill="#E8798A"/>
  <path d="M0 -48 Q-8 -36 -20 -42 M0 -48 Q8 -36 20 -42" stroke="#5A3A2A" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <g stroke="#5A3A2A" stroke-width="2.5" opacity=".6" stroke-linecap="round"><path d="M-36 -52 L-112 -64"/><path d="M-36 -44 L-112 -40"/><path d="M36 -52 L112 -64"/><path d="M36 -44 L112 -40"/></g>
  </g>`;
}
const flower=(x,y,c)=>`<g transform="translate(${x} ${y})"><path d="M0 0 L0 30" stroke="#3F8B3A" stroke-width="4"/>${[0,72,144,216,288].map(a=>`<circle cx="${Math.cos(a*Math.PI/180)*10}" cy="${Math.sin(a*Math.PI/180)*10}" r="8" fill="${c}"/>`).join('')}<circle r="6" fill="#FFD447"/></g>`;
const wrap=b=>`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1600" viewBox="0 0 600 600">${b}</svg>`;

const SVG_SUNNY=wrap(`
<rect width="600" height="600" fill="#9FD9F6"/>
<g stroke="#FFD447" stroke-width="8" stroke-linecap="round">${[0,45,90,135,180,225,270,315].map(a=>{const r=a*Math.PI/180;return `<path d="M${500+Math.cos(r)*72} ${100+Math.sin(r)*72} L${500+Math.cos(r)*92} ${100+Math.sin(r)*92}"/>`}).join('')}</g>
<circle cx="500" cy="100" r="58" fill="#FFD447"/>
<g fill="#fff"><ellipse cx="110" cy="95" rx="62" ry="26"/><ellipse cx="150" cy="78" rx="42" ry="30"/><ellipse cx="80" cy="82" rx="30" ry="22"/><ellipse cx="330" cy="60" rx="48" ry="18"/><ellipse cx="360" cy="50" rx="28" ry="20"/></g>
<path d="M0 410 Q150 350 300 400 T600 390 V600 H0Z" fill="#8FD07A"/>
<path d="M0 470 Q200 430 380 470 T600 455 V600 H0Z" fill="#62B255"/>
${flower(60,470,'#FF7FA8')}${flower(120,520,'#FFFFFF')}${flower(500,480,'#B78BFF')}${flower(555,530,'#FF7FA8')}${flower(450,545,'#FFFFFF')}${flower(40,555,'#FFB347')}
<g transform="translate(110 250)"><ellipse cx="-10" cy="0" rx="14" ry="10" fill="#FF9DC0"/><ellipse cx="10" cy="0" rx="14" ry="10" fill="#FF9DC0"/><rect x="-2" y="-8" width="4" height="16" rx="2" fill="#5A3A2A"/></g>
${cat({x:300,y:335,s:1.12,fur:'#F29A4A',belly:'#FFE3C2',dark:'#C8641F',line:'#9A4E1C',eye:'#7BBF4A',stripes:true,tail:'#E8893A'})}
`);

const SVG_NIGHT=wrap(`
<rect width="600" height="600" fill="#8E6FB8"/>
<g fill="#9C80C4">${Array.from({length:30},(_,i)=>`<circle cx="${(i%6)*100+30+((i/6|0)%2)*50}" cy="${(i/6|0)*85+20}" r="6"/>`).join('')}</g>
<rect x="330" y="50" width="220" height="230" rx="10" fill="#1E2A5A" stroke="#F4E6C8" stroke-width="14"/>
<path d="M440 50 V280 M330 165 H550" stroke="#F4E6C8" stroke-width="10"/>
<circle cx="488" cy="112" r="34" fill="#FFE58A"/><circle cx="503" cy="102" r="30" fill="#1E2A5A"/>
<g fill="#FFF6C8"><circle cx="370" cy="90" r="4"/><circle cx="405" cy="130" r="3"/><circle cx="380" cy="220" r="4"/><circle cx="500" cy="230" r="3"/><circle cx="470" cy="200" r="4"/><circle cx="415" cy="245" r="3"/></g>
<rect x="0" y="420" width="600" height="180" fill="#A8754A"/>
<g stroke="#8E5F3A" stroke-width="4"><path d="M0 470 H600 M0 530 H600 M150 420 V470 M420 470 V530 M250 530 V600 M520 420 V470"/></g>
<circle cx="95" cy="230" r="90" fill="#FFE58A" opacity=".25"/>
<path d="M60 200 L130 200 L115 160 L75 160 Z" fill="#FFD066"/><rect x="91" y="200" width="8" height="120" fill="#5A3A2A"/><rect x="65" y="320" width="60" height="12" rx="6" fill="#5A3A2A"/>
<ellipse cx="300" cy="475" rx="215" ry="72" fill="#C94642"/>
<ellipse cx="300" cy="458" rx="195" ry="52" fill="#E0635E"/>
<g fill="#F4C542"><circle cx="90" cy="490" r="10"/><circle cx="510" cy="490" r="10"/></g>
<ellipse cx="330" cy="408" rx="150" ry="74" fill="#707684" stroke="#4A4F5C" stroke-width="5"/>
<g stroke="#585E6C" stroke-width="9" fill="none" stroke-linecap="round"><path d="M290 345 Q300 370 285 395"/><path d="M340 338 Q352 365 338 392"/><path d="M390 345 Q402 370 390 398"/></g>
<path d="M180 445 Q260 500 420 470" fill="none" stroke="#4A4F5C" stroke-width="38" stroke-linecap="round"/>
<path d="M180 445 Q260 500 420 470" fill="none" stroke="#707684" stroke-width="28" stroke-linecap="round"/>
<polygon points="150,385 140,318 196,352" fill="#707684" stroke="#4A4F5C" stroke-width="5"/>
<polygon points="210,348 250,305 258,372" fill="#707684" stroke="#4A4F5C" stroke-width="5"/>
<circle cx="200" cy="405" r="64" fill="#707684" stroke="#4A4F5C" stroke-width="5"/>
<polygon points="155,365 152,334 180,354" fill="#F7A9B5"/><polygon points="222,350 244,326 246,362" fill="#F7A9B5"/>
<g stroke="#2E313A" stroke-width="4.5" fill="none" stroke-linecap="round"><path d="M165 405 Q177 416 190 405"/><path d="M212 405 Q224 416 237 405"/></g>
<path d="M194 424 L208 424 L201 433 Z" fill="#E8798A"/>
<g stroke="#2E313A" stroke-width="2" opacity=".6"><path d="M180 432 L130 425 M182 438 L132 442 M222 432 L272 425 M220 438 L270 442"/></g>
<g fill="#fff" font-family="sans-serif" font-weight="bold"><text x="250" y="320" font-size="34">Z</text><text x="285" y="285" font-size="28">z</text><text x="312" y="258" font-size="22">z</text></g>
`);

const SVG_KITTEN=wrap(`
<defs><pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="8" fill="#FFCF4A"/><circle cx="45" cy="45" r="8" fill="#FFCF4A"/></pattern></defs>
<rect width="600" height="600" fill="#FFE27A"/><rect width="600" height="600" fill="url(#dots)"/>
<ellipse cx="300" cy="570" rx="330" ry="110" fill="#7FC8A9"/>
<ellipse cx="300" cy="570" rx="300" ry="90" fill="none" stroke="#5FAF8C" stroke-width="8" stroke-dasharray="18 12"/>
<path d="M410 500 C360 560 250 575 215 515" fill="none" stroke="#F27BA6" stroke-width="6" stroke-linecap="round"/>
<circle cx="470" cy="460" r="72" fill="#F27BA6"/>
<g fill="none" stroke="#D9568A" stroke-width="5"><path d="M410 430 Q470 400 530 440"/><path d="M405 465 Q470 430 540 475"/><path d="M420 505 Q480 470 535 500"/><path d="M450 392 Q420 460 455 530"/><path d="M495 395 Q470 460 500 528"/></g>
<g fill="#fff"><path d="M80 90 l8 18 18 8 -18 8 -8 18 -8 -18 -18 -8 18 -8z"/><path d="M520 120 l6 14 14 6 -14 6 -6 14 -6 -14 -14 -6 14 -6z"/><path d="M470 260 l5 11 11 5 -11 5 -5 11 -5 -11 -11 -5 11 -5z"/></g>
${cat({x:245,y:330,s:.98,tilt:-8,fur:'#FFFFFF',belly:'#F6F0EA',line:'#B5A99C',eye:'#5FA8E0',patches:'<ellipse cx="48" cy="-150" rx="55" ry="48" fill="#C9C2BA"/><ellipse cx="-80" cy="90" rx="40" ry="34" fill="#C9C2BA"/>'})}
`);

const SVG_WINDOW=wrap(`
<rect width="600" height="600" fill="#F6E3C4"/>
<g fill="#EFD5AA">${Array.from({length:10},(_,i)=>`<rect x="${i*60+20}" y="0" width="20" height="600"/>`).join('')}</g>
<rect x="95" y="40" width="410" height="365" fill="#BDE6FF"/>
<circle cx="180" cy="280" r="70" fill="#7CC36A"/><circle cx="240" cy="250" r="60" fill="#8FD07A"/><rect x="200" y="290" width="18" height="80" fill="#8B5A35"/>
<path d="M95 350 Q250 300 505 340 V405 H95Z" fill="#62B255"/>
<g fill="#fff"><ellipse cx="380" cy="110" rx="50" ry="20"/><ellipse cx="410" cy="96" rx="30" ry="22"/></g>
<rect x="95" y="40" width="410" height="365" fill="none" stroke="#FFFFFF" stroke-width="16"/>
<path d="M300 40 V405" stroke="#FFFFFF" stroke-width="12"/>
<path d="M60 20 Q110 120 80 220 Q60 300 110 410 L40 410 L40 20Z" fill="#D8574A"/>
<path d="M540 20 Q490 120 520 220 Q540 300 490 410 L560 410 L560 20Z" fill="#D8574A"/>
<g stroke="#B9443A" stroke-width="5" fill="none"><path d="M55 40 Q80 150 60 400"/><path d="M545 40 Q520 150 540 400"/></g>
<rect x="30" y="10" width="540" height="16" rx="8" fill="#8B5A35"/>
<rect x="50" y="400" width="500" height="32" rx="6" fill="#C98B5B"/>
<rect x="0" y="432" width="600" height="168" fill="#E9C99E"/>
<rect x="390" y="470" width="120" height="90" rx="6" fill="#fff" stroke="#8B5A35" stroke-width="8"/><circle cx="430" cy="505" r="14" fill="#FFB347"/><path d="M398 552 L440 515 L470 540 L502 510 V552Z" fill="#7CC36A"/>
<g fill="#4E9A43"><ellipse cx="455" cy="320" rx="16" ry="38" transform="rotate(-25 455 320)"/><ellipse cx="485" cy="315" rx="16" ry="40" transform="rotate(20 485 315)"/><ellipse cx="470" cy="300" rx="14" ry="42"/></g>
<path d="M435 340 L505 340 L495 400 L445 400Z" fill="#C0643E"/>
${cat({x:250,y:252,s:.9,fur:'#FFFFFF',belly:'#FFFFFF',line:'#8A7A6A',eye:'#E7B43A',tail:'#F2994A',patches:'<circle cx="-52" cy="-112" r="48" fill="#F2994A"/><circle cx="58" cy="-122" r="42" fill="#3B3B3B"/><ellipse cx="-78" cy="55" rx="58" ry="46" fill="#3B3B3B"/><ellipse cx="74" cy="100" rx="52" ry="40" fill="#F2994A"/>'})}
`);

/* ====== 画像リスト ====== */
const svgUrl=s=>'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(s);
function loadImg(url){const img=new Image();const ready=new Promise((res,rej)=>{img.onload=()=>res(img);img.onerror=rej;});img.src=url;return {img,ready};}
// nm:[漢字, ひらがな]。写真は no(番号)を持つ
const images=[
  {nm:['ひなたぼっこ','ひなたぼっこ'],url:svgUrl(SVG_SUNNY)},
  {nm:['おやすみ','おやすみ'],url:svgUrl(SVG_NIGHT)},
  {nm:['子猫と毛糸','こねこと けいと'],url:svgUrl(SVG_KITTEN)},
  {nm:['窓辺','まどべ'],url:svgUrl(SVG_WINDOW)},
].map(o=>Object.assign(o,loadImg(o.url)));
const SAMPLE_N=images.length; // 数独の完成画面に出す絵(サンプルの猫イラスト)
const picName=o=>o.nm?o.nm[kana]:t('photoN')+' '+o.no;
const COUNTS=[2,3,4,5,6,7,8];
// 絵の選択:selApi=猫の写真(API)の番号、selAlb=ごほうびの絵の番号(どちらも -1 ならイラスト・iPadの写真の selPic)
let selPic=0, selN=3, photoNo=0, selApi=-1, selAlb=-1;

const $=s=>document.querySelector(s);
// 安全な要素作成:文字は必ず textContent で入れる(HTMLとして解釈させない)
function mk(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=String(text);return e;}
// 画像URLは data:image / blob: / https: だけ許可
function safeImgUrl(u){u=String(u||'');return /^(data:image\/|blob:|https:\/\/)/i.test(u)?u:'';}
function renderPics(){
  const box=$('#pics');box.replaceChildren();
  images.forEach((o,i)=>{
    const d=document.createElement('button');d.className='pic'+(selApi<0&&selAlb<0&&i===selPic?' sel':'');
    const im=mk('img');im.alt='';im.src=safeImgUrl(o.url);
    d.append(im,mk('div','nm',picName(o)));
    d.onclick=()=>{selPic=i;selApi=-1;selAlb=-1;renderAllPics();};
    box.appendChild(d);
  });
  const ph=document.createElement('label');ph.className='pic photo';
  const phBox=mk('div','ph');phBox.append(mk('b',null,'📷'),document.createTextNode(t('photo')));
  const fin=mk('input');fin.type='file';fin.accept='image/*';
  ph.append(phBox,mk('div','nm',t('photoNm')),fin);
  fin.onchange=e=>{
    const f=e.target.files&&e.target.files[0];if(!f||!/^image\//.test(f.type||''))return;
    const url=URL.createObjectURL(f);
    images.push(Object.assign({no:++photoNo,url},loadImg(url)));
    selPic=images.length-1;selApi=-1;selAlb=-1;renderAllPics();
  };
  box.appendChild(ph);
  renderSel();
}

/* ====== 猫の写真(許可リスト方式) ====== */
// 管理者が確認して許可した写真だけを使う。一覧は同じサイトの approved.json(番号・アドレス・写真の中身の指紋 SHA-256)。
// iPad は一覧の写真をまとめて読み込み、指紋が一致したものだけを iPad 内(IndexedDB 'apv')に保存する(取得元で差し替えられても出さない)。
// 見せる写真(出た猫)は少しずつ増やす:最初に6枚、数独をクリアするたびに1枚(1日2枚まで。管理用の設定で変更可)。番号の小さい順
// 候補探し(The Cat API / cataas)は管理用の画面だけで使う
const CAT_KEY='neko-catapi-key';
const CAT_KEY_RE=/^[A-Za-z0-9_-]{8,100}$/;
const TCA_IMG_RE=/^https:\/\/cdn2\.thecatapi\.com\/images\/[A-Za-z0-9_-]{1,40}\.(jpe?g|png)$/i;
const CATAAS_ID_RE=/^[A-Za-z0-9_-]{6,40}$/;
const CATAAS_IMG_RE=/^https:\/\/cataas\.com\/cat\/[A-Za-z0-9_-]{6,40}$/;
const APV_URL='approved.json',APV_MAX=60,APV_ADM_MAX=50,APV_FIRST=6,APV_SHOW=6,HASH_RE=/^[0-9a-f]{64}$/;
const APV_OPEN_KEY='neko-apv-open',APV_BAD_KEY='neko-apv-bad',APV_NEW_KEY='neko-apv-new';
// 1日に出せる新しい猫(数独のクリアで1枚)。使わなかった分は持ち越さない
const CAT_LIMIT_KEY='neko-sd-limit',CAT_QUOTA_KEY='neko-sd-quota',CAT_LIMIT_DEF=2,CAT_LIMIT_MAX=50;
try{localStorage.removeItem('neko-apv-limit');localStorage.removeItem('neko-apv-quota');}catch(e){}
let catItems=[],catState='idle',catGen=0,apvPool=[],apvList=null,apvNoSave=false,apvFold=true,apvLast=0;
let apvStat={list:0,saved:0,bad:0,err:''};
function catKey(){try{const k=localStorage.getItem(CAT_KEY)||'';return CAT_KEY_RE.test(k)?k:'';}catch(e){return '';}}
const jstDay=()=>new Date(Date.now()+9*3600e3).toISOString().slice(0,10);
function catLimit(){
  try{const v=localStorage.getItem(CAT_LIMIT_KEY);if(v===null)return CAT_LIMIT_DEF;const n=Number(v);return Number.isInteger(n)&&n>=0&&n<=CAT_LIMIT_MAX?n:CAT_LIMIT_DEF;}catch(e){return CAT_LIMIT_DEF;}
}
function catUsed(){
  try{const o=JSON.parse(localStorage.getItem(CAT_QUOTA_KEY)||'null');return o&&o.d===jstDay()&&Number.isInteger(o.n)&&o.n>=0&&o.n<10000?o.n:0;}catch(e){return 0;}
}
function catUse(){try{localStorage.setItem(CAT_QUOTA_KEY,JSON.stringify({d:jstDay(),n:catUsed()+1}));}catch(e){}}
function catUseReset(){try{localStorage.removeItem(CAT_QUOTA_KEY);}catch(e){}}
const catLeft=()=>Math.max(0,catLimit()-catUsed());
const catSrcOf=u=>TCA_IMG_RE.test(u)?'thecatapi':'cataas';
const catOkUrl=u=>typeof u==='string'&&(TCA_IMG_RE.test(u)||CATAAS_IMG_RE.test(u));
function fetchJson(url,opt,ms){
  const ctl=new AbortController(),tm=setTimeout(()=>ctl.abort(),ms);
  return fetch(url,Object.assign({signal:ctl.signal,cache:'no-store',credentials:'omit',referrerPolicy:'no-referrer',mode:'cors'},opt||{}))
    .then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json();})
    .finally(()=>clearTimeout(tm));
}
// 写真の中身(バイト列)を持ち出し許可つきで取る。持ち出せない写真・大きすぎる写真は失敗
async function fetchBytes(url,ms,cache){
  const ctl=new AbortController(),tm=setTimeout(()=>ctl.abort(),ms||20000);
  try{
    const r=await fetch(url,{signal:ctl.signal,credentials:'omit',referrerPolicy:'no-referrer',mode:'cors',cache:cache||'default'});
    if(!r.ok)throw new Error('HTTP '+r.status);
    const ty=(r.headers.get('content-type')||'').split(';')[0].trim().toLowerCase();
    if(!/^image\/(jpeg|png)$/.test(ty))throw new Error('type');
    const buf=await r.arrayBuffer();
    if(buf.byteLength<1000||buf.byteLength>=20e6)throw new Error('size');
    return {buf,type:ty};
  }finally{clearTimeout(tm);}
}
async function sha256(buf){
  const d=new Uint8Array(await crypto.subtle.digest('SHA-256',buf));
  return Array.from(d,b=>b.toString(16).padStart(2,'0')).join('');
}
// 画像の読み込み(15秒で打ち切り。小さすぎる画像は使わない)
function loadCatImg(url){
  return new Promise((res,rej)=>{
    const img=new Image();let done=false;
    const tm=setTimeout(()=>{if(!done){done=true;img.src='';rej(new Error('timeout'));}},15000);
    img.onload=()=>{if(done)return;done=true;clearTimeout(tm);(img.naturalWidth>=200&&img.naturalHeight>=200)?res(img):rej(new Error('small'));};
    img.onerror=()=>{if(done)return;done=true;clearTimeout(tm);rej(new Error('load'));};
    img.src=url;
  });
}
// 正方形の中央を切り出したJPEG(最大1600px)。切り出せない画像は null
function catToBlob(img){
  return new Promise(res=>{try{
    const iw=img.naturalWidth||img.width,ih=img.naturalHeight||img.height,sw=Math.min(iw,ih),o=Math.max(1,Math.min(1600,sw));
    const cv=document.createElement('canvas');cv.width=o;cv.height=o;
    const c=cv.getContext('2d');c.imageSmoothingQuality='high';c.drawImage(img,(iw-sw)/2,(ih-sw)/2,sw,sw,0,0,o,o);
    cv.toBlob(b=>res(b&&b.type==='image/jpeg'?b:null),'image/jpeg',0.88);
  }catch(e){res(null);}});
}
// 取ったバイト列から、切り出したJPEGを作る
async function bytesToJpeg(buf,type){
  const u=URL.createObjectURL(new Blob([buf],{type}));
  try{return await catToBlob(await loadCatImg(u));}finally{URL.revokeObjectURL(u);}
}
/* ====== 画質の目安(写真の短い辺の大きさ。よい 1200px〜/ふつう 800px〜/あらめ 〜799px) ====== */
// 保存した写真は最大1600pxなので、1600px のときは「1600px以上」と出す(raw:元の写真のまま=管理用の候補)
const Q_CAP=1600;
const qLv=px=>px>=1200?0:px>=800?1:2;
function qText(px,raw,short){
  const sz=!raw&&px>=Q_CAP?(kana?Q_CAP+'px いじょう':Q_CAP+'px以上'):px+'px';
  return short?t('q'+qLv(px))+' '+px:t('qH')+':'+t('q'+qLv(px))+'('+sz+')';
}
function qPaint(el){
  const px=Number(el.dataset.px);if(!(px>0)){el.style.display='none';return;}
  el.classList.remove('q0','q1','q2');el.classList.add('q'+qLv(px));
  el.textContent=qText(px,el.dataset.raw==='1',el.dataset.short==='1');el.style.display='';
}
// img が読めたら el に画質を出す。on=false(イラストなど)は出さない。同じ img に付け直しても重ならない
function qBind(img,el,on,raw,short){
  if(img._qf)img.removeEventListener('load',img._qf);img._qf=null;
  delete el.dataset.px;el.style.display='none';if(!on)return;
  el.dataset.raw=raw?'1':'';el.dataset.short=short?'1':'';
  const f=()=>{const w=img.naturalWidth,h=img.naturalHeight;if(w&&h){el.dataset.px=String(Math.min(w,h));qPaint(el);}};
  img._qf=f;img.addEventListener('load',f);if(img.complete&&img.naturalWidth)f();
}
// 表記の切り替えで描き直す
function qRefresh(){document.querySelectorAll('[data-px]').forEach(qPaint);}
// 消した写真(不適切な画像など)のアドレス。二度と出さない
const CAT_NG_KEY='neko-cat-ng',CAT_NG_MAX=300;
function catNg(){try{const a=JSON.parse(localStorage.getItem(CAT_NG_KEY)||'[]');return Array.isArray(a)?a.filter(catOkUrl).slice(-CAT_NG_MAX):[];}catch(e){return [];}}
function catNgAdd(u){if(!catOkUrl(u))return;const a=catNg().filter(x=>x!==u);a.push(u);try{localStorage.setItem(CAT_NG_KEY,JSON.stringify(a.slice(-CAT_NG_MAX)));}catch(e){}}
// 許可リスト(approved.json)の形式を確かめる。合わない行は捨てる
function apvParse(o){
  if(!o||typeof o!=='object'||o.v!==1||!Array.isArray(o.list))return null;
  const nos=new Set(),us=new Set(),list=[];
  for(const e of o.list.slice(0,APV_MAX)){
    if(!e||typeof e!=='object'||!Number.isInteger(e.no)||e.no<1||e.no>99999||!catOkUrl(e.u)||typeof e.h!=='string'||!HASH_RE.test(e.h))continue;
    if(nos.has(e.no)||us.has(e.u))continue;
    nos.add(e.no);us.add(e.u);list.push({no:e.no,u:e.u,h:e.h});
  }
  const next=Number.isInteger(o.next)&&o.next>=1&&o.next<=100000?o.next:1;
  return {next:Math.max(next,...list.map(e=>e.no+1),1),list};
}
async function apvFetchList(){
  const r=await fetch(APV_URL+'?_='+Date.now(),{cache:'no-store',credentials:'omit'});
  if(!r.ok)throw new Error('HTTP '+r.status);
  const p=apvParse(await r.json());if(!p)throw new Error('format');
  return p;
}
// 解放した写真の番号(解放した順)と「新しい」印
function apvOpen(){try{const o=JSON.parse(localStorage.getItem(APV_OPEN_KEY)||'null');return o&&o.v===1&&Array.isArray(o.open)?o.open.filter(n=>Number.isInteger(n)&&n>0&&n<=99999).slice(-500):[];}catch(e){return [];}}
function apvOpenSave(a){try{localStorage.setItem(APV_OPEN_KEY,JSON.stringify({v:1,open:a.slice(-500)}));}catch(e){}}
function apvNew(){try{const a=JSON.parse(localStorage.getItem(APV_NEW_KEY)||'[]');return new Set(Array.isArray(a)?a.filter(Number.isInteger):[]);}catch(e){return new Set();}}
function apvNewSave(s){try{localStorage.setItem(APV_NEW_KEY,JSON.stringify([...s].slice(-60)));}catch(e){}}
// 指紋が合わなかった写真(番号:指紋)。同じものは読み直さない
function apvBad(){try{const a=JSON.parse(localStorage.getItem(APV_BAD_KEY)||'[]');return new Set(Array.isArray(a)?a.filter(x=>typeof x==='string'&&/^[0-9]{1,5}:[0-9a-f]{64}$/.test(x)):[]);}catch(e){return new Set();}}
function apvBadAdd(k){const s=apvBad();s.add(k);try{localStorage.setItem(APV_BAD_KEY,JSON.stringify([...s].slice(-200)));}catch(e){}}
function apvSaveDb(){
  if(apvNoSave)return;
  const list=apvPool.map(o=>({no:o.no,u:o.ou,h:o.h,blob:o.blob}));
  jgQueue(()=>idbPut('apv',{v:1,list}));
}
async function apvLoadDb(){
  const o=await jgQueue(()=>idbGet('apv'));
  if(o===IDB_ERR)throw new Error('idb');
  if(!o||typeof o!=='object'||o.v!==1||!Array.isArray(o.list))return [];
  return o.list.filter(e=>e&&Number.isInteger(e.no)&&catOkUrl(e.u)&&typeof e.h==='string'&&HASH_RE.test(e.h)&&e.blob instanceof Blob&&e.blob.type==='image/jpeg'&&e.blob.size<20e6).slice(0,APV_MAX);
}
function apvMakeItem(e){
  const url=URL.createObjectURL(e.blob),{img,ready}=loadImg(url);
  return {api:true,src:catSrcOf(e.u),ou:e.u,blob:e.blob,url,img,ready,no:e.no,h:e.h};
}
// 見せる写真(解放した写真のうち、保存済みで消していないもの)。新しく解放した順
function apvRebuild(){
  const ng=new Set(catNg()),by=new Map(apvPool.map(o=>[o.no,o])),cur=selApi>=0?catItems[selApi]:null;
  catItems=apvOpen().filter(n=>by.has(n)&&!ng.has(by.get(n).ou)).map(n=>by.get(n)).reverse();
  // 選んでいた写真は、並びが変わっても選んだままにする
  if(selApi>=0)selApi=cur?catItems.indexOf(cur):-1;
}
// まだ解放していない写真(番号の小さい順=古い順)
function apvRest(){const op=new Set(apvOpen()),ng=new Set(catNg());return apvPool.filter(o=>!op.has(o.no)&&!ng.has(o.ou)).sort((a,b)=>a.no-b.no);}
// n枚解放する。解放できた枚数を返す
function apvUnlock(n){
  const rest=apvRest().slice(0,n);if(!rest.length)return 0;
  const op=apvOpen(),nw=apvNew();rest.forEach(o=>{op.push(o.no);nw.add(o.no);});
  apvOpenSave(op);apvNewSave(nw);apvRebuild();return rest.length;
}
// 見せる写真が6枚より少なければ6枚まで足す(最初・管理者が写真を外したとき)
function apvTopUp(){if(catItems.length<APV_FIRST)apvUnlock(APV_FIRST-catItems.length);}
// 数独をクリアしたら、遊んだ新しい猫(始めたときに決めた番号)を出す。出せたら番号を返す
function apvUnlockNo(no){
  if(!no)return 0;
  const op=apvOpen();if(op.includes(no))return 0;
  const o=apvPool.find(x=>x.no===no);if(!o||catNg().includes(o.ou))return 0;
  op.push(no);apvOpenSave(op);const nw=apvNew();nw.add(no);apvNewSave(nw);catUse();
  apvRebuild();renderAllPics();return no;
}
// 数独の絵の決め方。new:まだ出ていない猫(番号の小さい順)、limit/none:出た猫からランダム、illust:イラストからランダム、wait:読み込み中
function sdMode(){
  if(catState!=='ok')return 'wait';
  const rest=apvRest().length;
  if(rest&&catLeft()>0)return 'new';
  if(!catItems.length)return 'illust';
  return rest?'limit':'none';
}
function sdPick(){
  const m=sdMode(),rnd=a=>{const b=a.length>1&&sdItem?a.filter(x=>x!==sdItem):a;return b[Math.floor(Math.random()*b.length)];};
  if(m==='new'){const o=apvRest()[0];return {item:o,nw:o.no};}
  if(m==='limit'||m==='none')return {item:rnd(catItems),nw:0};
  return {item:rnd(images.slice(0,SAMPLE_N)),nw:0};
}
// 最初の画面の数独のカード・数独の開始画面の案内
function renderSdCard(){
  const s=$('#sdCardS');if(!s)return;
  const k=kana?'まい':'枚',rest=apvRest().length,left=catLeft();
  s.textContent=catState!=='ok'?t('catLoading'):rest&&left>0?(kana?'きょうは あと '+left+k+' ・ まだ でていない ねこ '+rest+k:'今日あと'+left+k+' ・ まだ出ていない猫 '+rest+k):rest?t('sdcLimit'):t('sdcNone');
  const m=sdMode();$('#sdPicMsg').textContent=t(m==='new'?'sdmNew':m==='limit'?'sdmLimit':m==='none'?'sdmNone':m==='illust'?'sdmIllust':'catLoading');
}
// 起動時:保存した写真を出し、許可リストを読み、まだ保存していない写真を読み込む
async function initCats(){
  const gen=++catGen;apvLast=Date.now();
  if(!catItems.length){catState='loading';renderCatPics();}
  let saved=[];
  try{saved=await apvLoadDb();apvNoSave=false;}catch(e){apvNoSave=true;}
  if(gen!==catGen)return;
  // 古い方式の写真(ランダムな6枚)は使わない
  if(!apvNoSave)jgQueue(()=>idbDel('cats'));
  let lst=null;
  try{lst=await apvFetchList();apvList=lst;apvStat.err='';}catch(e){apvStat.err=String(e&&e.message||e).slice(0,40);}
  if(gen!==catGen)return;
  // 一覧が読めたら、一覧から外された写真は消す(読めないときは保存した写真で遊ぶ)
  const keep=lst?saved.filter(e=>lst.list.some(x=>x.no===e.no&&x.u===e.u&&x.h===e.h)):saved;
  apvPool.forEach(o=>{if(o.url.startsWith('blob:'))URL.revokeObjectURL(o.url);});
  apvPool=keep.map(apvMakeItem);
  if(lst&&keep.length!==saved.length)apvSaveDb();
  apvRebuild();apvTopUp();
  catState='ok';apvStat.list=lst?lst.list.length:apvStat.list;apvStat.saved=apvPool.length;
  renderAllPics();
  if(!lst)return;
  // まだ保存していない写真を読み込み、指紋が一致したものだけ保存する
  const have=new Set(apvPool.map(o=>o.no)),bad=apvBad(),ng=new Set(catNg());
  apvStat.bad=lst.list.filter(e=>bad.has(e.no+':'+e.h)).length;
  const todo=lst.list.filter(e=>!have.has(e.no)&&!ng.has(e.u)&&!bad.has(e.no+':'+e.h));
  for(const e of todo){
    if(gen!==catGen)return;
    try{
      const {buf,type}=await fetchBytes(e.u);
      if(await sha256(buf)!==e.h){apvBadAdd(e.no+':'+e.h);apvStat.bad++;continue;}
      const blob=await bytesToJpeg(buf,type);if(!blob)continue;
      if(gen!==catGen)return;
      apvPool.push(apvMakeItem({no:e.no,u:e.u,h:e.h,blob}));apvSaveDb();
      apvStat.saved=apvPool.length;
      apvRebuild();apvTopUp();renderAllPics();
    }catch(err){}
  }
  renderAllPics();
}
// 選んだ写真を消す(確認のあと)。不適切な画像が紛れたとき用。消した写真は二度と出さない(猫の写真・ごほうびの絵の両方から消す)
function catDelAsk(){const k=selApi;if(catState==='ok'&&catItems[k])delOpen('cat',k,catItems[k]);}
function albDelAsk(){const k=selAlb;if(albItems[k])delOpen('alb',k,albItems[k]);}
function delOpen(tp,k,o){
  $('#catDelImg').src=safeImgUrl(o.url);
  $('#catDelP').textContent=t(tp==='alb'?'albDelP':'catDelP');
  const ov=$('#catDelOv');ov.dataset.tp=tp;ov.dataset.k=String(k);ov.classList.add('on');
}
function catDelClose(){$('#catDelOv').classList.remove('on');$('#catDelImg').removeAttribute('src');}
function catDelDo(){
  const ov=$('#catDelOv'),tp=ov.dataset.tp,k=Number(ov.dataset.k);
  const o=tp==='alb'?albItems[k]:catItems[k];
  catDelClose();
  if(!o||(tp==='alb'?k!==selAlb:k!==selApi))return;
  const ou=o.ou;
  // ごほうびの絵から消すのは整理のため:その1枚だけ消す(出さない一覧には入れない。猫の写真はそのまま)
  if(tp==='alb'){
    URL.revokeObjectURL(o.url);albItems.splice(k,1);selAlb=-1;albSave();
    toast('catDelDone',2000);renderAllPics();return;
  }
  // 猫の写真から消すのは不適切な画像のため:出さない一覧に入れ、ごほうびの絵からも消す
  catNgAdd(ou);selApi=-1;apvRebuild();
  const before=albItems.length;
  albItems=albItems.filter(x=>{if(x.ou!==ou)return true;URL.revokeObjectURL(x.url);return false;});
  if(albItems.length!==before){selAlb=-1;albSave();}
  toast('catDelDone',2000);
  renderAllPics();
}
$('#catDelOv').onclick=e=>{if(e.target.id==='catDelOv')catDelClose();};
$('#catDelNo').onclick=catDelClose;
$('#catDelYes').onclick=catDelDo;
$('#catDel').onclick=()=>{ensureAudio();catDelAsk();};
$('#albDel').onclick=()=>{ensureAudio();albDelAsk();};
$('#catFold').onclick=()=>{apvFold=!apvFold;renderCatPics();};
function renderCatPics(){
  const box=$('#catPics'),msg=$('#catMsg'),del=$('#catDel'),q=$('#catQuota'),fb=$('#catFold');box.replaceChildren();
  const show=catState==='ok';
  const empty=show&&!catItems.length;
  msg.classList.toggle('on',catState==='loading'||empty);
  msg.textContent=catState==='loading'?t('catLoading'):empty?t('apvNone'):'';
  $('#catCredit').style.display=show&&catItems.length?'':'none';
  $('#catBtns').style.display=show&&catItems.length?'':'none';
  q.style.display=show?'':'none';
  renderSdCard();
  if(catState==='loading'){
    for(let i=0;i<APV_FIRST;i++){const d=mk('div','pic wait');d.appendChild(mk('div','ph',t('catWait')));box.appendChild(d);}
    fb.style.display='none';return;
  }
  // 新しい順に6枚まで。それより前は「前の写真も見る」で開く(選んでいる写真は必ず見せる)
  if(selApi>=APV_SHOW)apvFold=false;
  const nw=apvNew(),lim=apvFold?APV_SHOW:catItems.length;
  catItems.slice(0,lim).forEach((o,k)=>{
    const d=document.createElement('button');d.className='pic'+(selApi===k?' sel':'');
    const im=mk('img');im.alt='';im.src=safeImgUrl(o.url);
    const q=mk('div','qt'),pw=mk('div','pim');pw.append(im,mk('span','pno',String(o.no)));
    if(nw.has(o.no))pw.appendChild(mk('span','pnew','NEW'));
    d.append(pw,q);qBind(im,q,true);
    d.onclick=()=>{selApi=k;selAlb=-1;const s=apvNew();if(s.delete(o.no))apvNewSave(s);renderAllPics();};
    box.appendChild(d);
  });
  const more=catItems.length-APV_SHOW;
  fb.style.display=more>0?'':'none';
  fb.textContent=apvFold?t('apvOpen1')+(kana?' ('+more+'まい)':'('+more+'枚)'):t('apvClose');
  if(!show)return;
  del.textContent=t('catDel');
  del.disabled=selApi<0||!catItems[selApi];
  q.textContent=t('apvClearHelp');
}
const curItem=()=>selApi>=0&&catItems[selApi]?catItems[selApi]:selAlb>=0&&albItems[selAlb]?albItems[selAlb]:images[selPic];
function renderAllPics(){renderCatPics();renderAlb();renderPics();}
// 選んだ絵を、最初の画面の下の欄・各パズルの開始画面に出す。「大きく見る」はイラスト・iPadの写真を選んでいるときだけ押せる
function renderSel(){
  if(typeof albItems==='undefined')return;
  const it=curItem(),u=safeImgUrl(it&&it.url);
  ['#mSelImg','#jgSelImg'].forEach(q=>{const e=$(q);if(e&&e.getAttribute('src')!==u)e.src=u;});
  $('#jgSelImg').classList.toggle('flip',selFlip);
  $('#picZoom').disabled=selApi>=0||selAlb>=0;
  // 写真そのものを保存できなかった猫の写真は、ごほうびの絵に入らない(遊ぶ前に知らせる)
  const ng=!!(it&&it.api&&!it.wait&&!(it.blob instanceof Blob));
  $('#jgNoGift').style.display=ng?'':'none';$('#sdNoGift').style.display='none';
  $('#jgNoGift').textContent=t('noGift')+(kana?' ':'')+t('noGiftJg');
  $('#sdNoGift').textContent=t('noGift')+(kana?' ':'')+t('noGiftSd');
}
/* ====== iPad本体(写真アプリ)への保存 ====== */
// 正方形のJPEGにして、共有の画面(「画像を保存」で写真アプリへ)を開く。共有できない端末ではダウンロード。
// 共有はボタンを押した直後でないと開けないので、ファイルは画面を開いたときに先に作っておく
async function picFile(item){
  if(!item)return null;
  let blob=item.blob instanceof Blob&&item.blob.type==='image/jpeg'?item.blob:null;
  if(!blob){
    let img;try{img=await item.ready;}catch(e){return null;}
    blob=await new Promise(res=>{try{
      const iw=img.naturalWidth||img.width,ih=img.naturalHeight||img.height,sw=Math.min(iw,ih);
      const o=item.nm?1200:Math.max(1,Math.min(1600,sw)); // イラスト(SVG)は大きめに描く
      const cv=document.createElement('canvas');cv.width=o;cv.height=o;
      const c=cv.getContext('2d');c.fillStyle='#fff';c.fillRect(0,0,o,o);c.imageSmoothingQuality='high';
      c.drawImage(img,(iw-sw)/2,(ih-sw)/2,sw,sw,0,0,o,o);
      cv.toBlob(b=>res(b&&b.type==='image/jpeg'?b:null),'image/jpeg',0.92);
    }catch(e){res(null);}}); // 持ち出しが許可されていない写真は作れない
  }
  if(!blob)return null;
  const d=new Date(Date.now()+9*3600e3).toISOString().replace(/\D/g,'').slice(0,14);
  try{return new File([blob],'neko-'+d+'.jpg',{type:'image/jpeg'});}catch(e){return null;}
}
function sharePic(file){
  if(!file){toast('saveNo',2400);return;}
  try{if(navigator.canShare&&navigator.share&&navigator.canShare({files:[file]})){navigator.share({files:[file]}).catch(()=>{});return;}}catch(e){}
  const a=document.createElement('a'),u=URL.createObjectURL(file);a.href=u;a.download=file.name;document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(u),20000);
}
// 完成画面の保存ボタン:作れたら押せる、作れなければ隠す
// 完成画面には遊んだ絵を元の向きで出す。長押し →「写真に追加」でも保存できるよう、作ったJPEGに差し替える
// (写真そのものを作れない猫の写真は、取得元の写真のまま出す。長押しでの保存はできる)
const doneFiles={},doneUrls={},DONE_PIC={'#doneSave':['#doneImg','#doneLp','#doneQ'],'#sdSave':['#sdCat','#sdLp','#sdQ']};
function donePrep(item,sel){
  const b=$(sel),g=$(sel+'G'),im=$(DONE_PIC[sel][0]),lp=$(DONE_PIC[sel][1]),tok={};
  doneFiles[sel]=tok;b.disabled=true;b.style.display='';g.style.display='';
  if(doneUrls[sel]){URL.revokeObjectURL(doneUrls[sel]);doneUrls[sel]=null;}
  qBind(im,$(DONE_PIC[sel][2]),!!item&&!item.nm);
  im.src=safeImgUrl(item?item.url:images[0].url);
  lp.className='lphint';lp.dataset.k='lpHint';lp.textContent=t('lpHint');
  picFile(item).then(f=>{
    if(doneFiles[sel]!==tok)return;doneFiles[sel]=f;
    if(f){b.disabled=false;const u=URL.createObjectURL(f);doneUrls[sel]=u;im.src=u;}
    else{
      b.style.display='none';g.style.display='none';
      if(item&&item.api){lp.dataset.k='lpOnly';lp.textContent=t('lpOnly');lp.classList.add('only');}
    }
  });
}
$('#doneSave').onclick=()=>{ensureAudio();const f=doneFiles['#doneSave'];if(f instanceof File)sharePic(f);};
$('#sdSave').onclick=()=>{ensureAudio();const f=doneFiles['#sdSave'];if(f instanceof File)sharePic(f);};

/* ====== 絵を大きく見る ====== */
// 写真アプリに入れやすいよう、表示もJPEGにする(長押し →「写真に追加」)
let zoomTok=null,zoomFile=null,zoomUrl=null;
function zoomOpen(item){
  if(!item)return;
  const tok={};zoomTok=tok;zoomFile=null;
  qBind($('#zoomImg'),$('#zoomQ'),!item.nm);
  $('#zoomImg').src=safeImgUrl(item.url);$('#zoomSave').disabled=true;$('#zoomOv').classList.add('on');
  picFile(item).then(f=>{
    if(zoomTok!==tok)return;
    zoomFile=f;if(!f)return;
    zoomUrl=URL.createObjectURL(f);$('#zoomImg').src=zoomUrl;$('#zoomSave').disabled=false;
  });
}
function zoomClose(){
  zoomTok=null;zoomFile=null;$('#zoomOv').classList.remove('on');$('#zoomImg').removeAttribute('src');
  if(zoomUrl){URL.revokeObjectURL(zoomUrl);zoomUrl=null;}
}
$('#zoomSave').onclick=()=>{ensureAudio();if(zoomFile)sharePic(zoomFile);};
$('#zoomOv').onclick=e=>{if(e.target.id==='zoomOv'||e.target.classList.contains('zbox'))zoomClose();};
$('#zoomClose').onclick=zoomClose;
$('#picZoom').onclick=()=>{ensureAudio();if(selApi<0&&selAlb<0)zoomOpen(images[selPic]);};
$('#albZoom').onclick=()=>{ensureAudio();if(selAlb>=0)zoomOpen(albItems[selAlb]);};

/* ====== ごほうびの絵(クリアした猫の写真。iPad内の IndexedDB 'album' に保存) ====== */
// {v:1, list:[{id, src, ou, blob:JPEG, at:ms}]}。新しい順。100枚まで(超えたら古いものから消える)
const ALB_MAX=100,ALB_ID=/^[a-z0-9]{4,24}$/;
const ALB_OFF=true; // 2026-11-16:ごほうびの絵の一覧はやめた(段階2で🎁の印にする)
let albItems=[],albReady=false; // albReady:保存を読めた(読めていないときは上書きしない)
const newId=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8);
const catMetaOk=m=>!!m&&typeof m==='object'&&((m.src==='thecatapi'&&TCA_IMG_RE.test(m.ou))||(m.src==='cataas'&&CATAAS_IMG_RE.test(m.ou)));
function albSave(){
  if(!albReady)return;
  const list=albItems.map(o=>({id:o.id,src:o.src,ou:o.ou,blob:o.blob,at:o.at}));
  jgQueue(()=>idbPut('album',{v:1,list}));
}
async function albLoad(){
  if(ALB_OFF){albItems=[];albReady=true;jgQueue(()=>idbDel('album'));renderAlb();return;}
  const o=await jgQueue(()=>idbGet('album'));
  if(o===IDB_ERR){renderAlb();return;}
  albReady=true;
  if(!o||typeof o!=='object'||o.v!==1||!Array.isArray(o.list)){renderAlb();return;}
  const ng=new Set(catNg()),seen=new Set();
  const ok=o.list.filter(e=>{
    if(!e||typeof e!=='object'||typeof e.id!=='string'||!ALB_ID.test(e.id)||!catMetaOk(e)||ng.has(e.ou)||seen.has(e.ou))return false;
    if(!(e.blob instanceof Blob)||e.blob.type!=='image/jpeg'||e.blob.size>=20e6||!Number.isFinite(e.at))return false;
    seen.add(e.ou);return true;
  }).slice(0,ALB_MAX);
  albItems.forEach(x=>URL.revokeObjectURL(x.url));
  albItems=ok.map(e=>{const url=URL.createObjectURL(e.blob);return Object.assign({alb:true,id:e.id,src:e.src,ou:e.ou,blob:e.blob,at:e.at,url},loadImg(url));});
  if(selAlb>=albItems.length)selAlb=-1;
  renderAlb();
}
// クリアした絵をごほうびに入れる(保存をまだ読めていなければ、先に読み直す)。入れたら true
async function albAddSafe(item){
  if(!albReady)await albLoad();
  if(!albReady)return false;
  return albAdd(item);
}
// 猫の写真以外・もう入っている写真は入れない
function albAdd(item){
  if(ALB_OFF)return false;
  if(!item||!catMetaOk(item)||!(item.blob instanceof Blob)||item.blob.type!=='image/jpeg')return false;
  if(catNg().includes(item.ou)||albItems.some(o=>o.ou===item.ou))return false;
  const cur=selAlb>=0?albItems[selAlb]:null;
  const url=URL.createObjectURL(item.blob);
  albItems.unshift(Object.assign({alb:true,id:newId(),src:item.src,ou:item.ou,blob:item.blob,at:Date.now(),url},loadImg(url)));
  while(albItems.length>ALB_MAX){const x=albItems.pop();if(x!==cur)URL.revokeObjectURL(x.url);}
  selAlb=cur?albItems.indexOf(cur):-1;
  albSave();renderAlb();return true;
}
function renderAlb(){
  const box=$('#albPics');box.replaceChildren();
  $('#albH').textContent=t('hAlb')+(albItems.length?(kana?'('+albItems.length+'まい)':'('+albItems.length+'枚)'):'');
  $('#albMsg').style.display=albItems.length?'none':'';
  albItems.forEach((o,k)=>{
    const d=document.createElement('button');d.className='pic'+(selAlb===k?' sel':'');
    const im=mk('img');im.alt='';im.src=safeImgUrl(o.url);
    const q=mk('div','qt');d.append(im,q);qBind(im,q,true);
    d.onclick=()=>{selAlb=k;selApi=-1;renderAllPics();};
    box.appendChild(d);
  });
  $('#albBtns').style.display=albItems.length?'':'none';
  $('#albZoom').disabled=selAlb<0;$('#albDel').disabled=selAlb<0;
  renderSel();
}
function renderCounts(){
  const box=$('#counts');box.replaceChildren();
  COUNTS.forEach(n=>{
    const b=document.createElement('button');b.className='cnt'+(n===selN?' sel':'');
    b.append(document.createTextNode(String(n*n)),mk('small',null,t('c'+n)));b.onclick=()=>{selN=n;renderCounts();};
    box.appendChild(b);
  });
}
const ROTS=[[false,'r0'],[true,'r1']];
// 絵の左右反転(始める前に選ぶ。選んだものはiPad内に保存)
const FLIP_KEY='jigsaw-flip';
let selFlip=false;
try{selFlip=localStorage.getItem(FLIP_KEY)==='1';}catch(e){}
function renderFlips(){
  const box=$('#flips');box.replaceChildren();
  [[false,'f0'],[true,'f1']].forEach(([v,k])=>{
    const b=document.createElement('button');b.className='cnt'+(v===selFlip?' sel':'');
    b.append(document.createTextNode(t(k)),mk('small',null,t(k+'d')));
    b.onclick=()=>{selFlip=v;try{localStorage.setItem(FLIP_KEY,v?'1':'0');}catch(e){}renderFlips();renderSel();};
    box.appendChild(b);
  });
}
let selRot=false;
function renderRots(){
  const box=$('#rots');box.replaceChildren();
  ROTS.forEach(([v,k])=>{
    const b=document.createElement('button');b.className='cnt'+(v===selRot?' sel':'');
    b.append(document.createTextNode(t(k)),mk('small',null,t(k+'d')));b.onclick=()=>{selRot=v;renderRots();};
    box.appendChild(b);
  });
}
let lastSec=null;
function applyLang(){
  document.body.classList.toggle('kana',kana===1);
  document.querySelectorAll('[data-t]').forEach(e=>{e.textContent=t(e.dataset.t);});
  document.querySelectorAll('.lgb').forEach(b=>b.classList.toggle('sel',Number(b.dataset.v)===kana));
  renderPics();renderCatPics();renderAlb();renderCounts();renderRots();renderFlips();
  if(lastSec!=null)$('#doneMsg').textContent=doneText(lastSec);
  document.querySelectorAll('.lphint').forEach(e=>{if(e.dataset.k)e.textContent=t(e.dataset.k);});
  if(window.SD_READY)sdApplyLang();
  if(window.JG_READY)renderJgCont();
  if(window.UPD_READY)renderUpd();
  qRefresh();
}
function setLang(v){
  kana=v===1?1:0;
  try{localStorage.setItem(LANG_KEY,String(kana));}catch(e){}
  applyLang();
  if(typeof relayout==='function'&&$('#play').classList.contains('on')&&!drag)relayout();
}
document.querySelectorAll('.lgb').forEach(b=>{b.onclick=()=>setLang(Number(b.dataset.v));});
applyLang();

/* ====== 音 ====== */
let ac=null, soundOn=true;
function ensureAudio(){
  try{
    if(!ac){const C=window.AudioContext||window.webkitAudioContext;if(C)ac=new C();}
    if(ac&&ac.state==='suspended')ac.resume().catch(()=>{});
  }catch(e){}
}
function tone(f,dt,d,v){
  if(!ac||!soundOn)return;
  try{
    const o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime+dt;
    o.type='sine';o.frequency.value=f;
    g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(v||0.18,t+0.02);g.gain.exponentialRampToValueAtTime(0.0001,t+d);
    o.connect(g);g.connect(ac.destination);o.start(t);o.stop(t+d+0.05);
  }catch(e){}
}
const sndSnap=()=>{tone(880,0,.25);tone(1320,.07,.3,.1);};
const sndDone=()=>[523,659,784,1047,1319].forEach((f,i)=>tone(f,i*.16,.6,.16));

/* ====== パズル本体 ====== */
const area=$('#area'), boardCv=$('#board'), targetEl=$('#target'), tray=$('#tray'), trayIn=$('#trayIn'), miniCv=$('#mini');
const boardImg=document.createElement('canvas');
const hitCtx=document.createElement('canvas').getContext('2d');
const dpr=Math.min(2,window.devicePixelRatio||1);
let G=null,pieces=[],trayList=[],N=3,ROT=false,FLIP=false,zTop=10,drag=null,pend=null,placed=0,t0=0,timer=null;
let edgeOnly=false,guideOn=true,miniOn=true,playing=false,finished=false,curImg=null,hintTimer=null;

// 凸凹の形(片側。h>0 が外向き)
const TPL=[[0.42,0,0.40,0.10,0.36,0.16],[0.30,0.26,0.40,0.32,0.50,0.32],[0.60,0.32,0.70,0.26,0.64,0.16],[0.60,0.10,0.58,0,0.65,0]];
function edge(P,x0,y0,x1,y1,nx,ny,s){
  if(!s){P.lineTo(x1,y1);return;}
  const dx=x1-x0,dy=y1-y0,k=Math.hypot(dx,dy)*0.8*s;
  const pt=(t,h)=>[x0+dx*t+nx*h*k,y0+dy*t+ny*h*k];
  P.lineTo(...pt(0.35,0));
  TPL.forEach(a=>P.bezierCurveTo(...pt(a[0],a[1]),...pt(a[2],a[3]),...pt(a[4],a[5])));
  P.lineTo(x1,y1);
}
function piecePath(p){
  const {cw,m}=G,e=p.e,P=new Path2D();
  P.moveTo(m,m);
  edge(P,m,m,m+cw,m,0,-1,e.t);
  edge(P,m+cw,m,m+cw,m+cw,1,0,e.r);
  edge(P,m+cw,m+cw,m,m+cw,0,1,e.b);
  edge(P,m,m+cw,m,m,-1,0,e.l);
  P.closePath();return P;
}

/* 画面の割り付け:盤面+(小さい見本)+ピース置き場 */
function geom(){
  const W=area.clientWidth,H=area.clientHeight,pad=18,land=W>=H;
  let side,bx,by,rx,ry,rw,rh;
  if(land){side=Math.min(H-pad*2,W*(N>=5?0.5:0.56));bx=pad+6;by=(H-side)/2;rx=bx+side+pad;ry=pad;rw=W-rx-pad;rh=H-pad*2;}
  else{side=Math.min(W-pad*2,H*(N>=7?0.5:0.42));bx=(W-side)/2;by=pad+6;rx=pad;ry=by+side+pad;rw=W-pad*2;rh=H-ry-pad;}
  side=Math.max(N,Math.floor(side/N)*N);
  const cw=side/N,m=Math.ceil(cw*0.27),S=cw+2*m,slot=Math.round(cw+m);
  let mini=null,tr;
  if(miniOn){
    if(land){const ms=Math.round(Math.min(170,rw*0.5,rh*0.28));mini={x:rx,y:ry,s:ms};tr={x:rx,y:ry+ms+12,w:rw,h:rh-ms-12};}
    else{const ms=Math.round(Math.min(170,rh,rw*0.3));mini={x:rx,y:ry,s:ms};tr={x:rx+ms+12,y:ry,w:rw-ms-12,h:rh};}
  }else tr={x:rx,y:ry,w:rw,h:rh};
  // スクロール用レーン(横向き:置き場の右/縦向き:置き場の下)
  const LW=68;let lane;
  if(land){lane={x:tr.x+tr.w-LW,y:tr.y,w:LW,h:tr.h};tr.w-=LW+10;}
  else{lane={x:tr.x,y:tr.y+tr.h-LW,w:tr.w,h:LW};tr.h-=LW+10;}
  return {W,H,land,side,bx,by,cw,m,S,slot,mini,tray:tr,lane};
}
const tgt=p=>[G.bx+p.c*G.cw-G.m,G.by+p.r*G.cw-G.m];
const clampX=x=>Math.max(-G.m,Math.min(G.W-G.S+G.m,x));
const clampY=y=>Math.max(-G.m,Math.min(G.H-G.S+G.m,y));
const upright=p=>((p.rot%360)+360)%360===0;
function setTf(p,x,y){p.el.style.transform=`translate(${x}px,${y}px) rotate(${p.rot}deg)`;}
function placeA(p){if(p.el.parentNode!==area)area.appendChild(p.el);setTf(p,p.x,p.y);}
function placeT(p){if(p.el.parentNode!==trayIn)trayIn.appendChild(p.el);p.el.style.zIndex=1;setTf(p,p.tx,p.ty);}
const isEdge=p=>p.r===0||p.c===0||p.r===N-1||p.c===N-1;
function visTray(){return edgeOnly?trayList.filter(isEdge):trayList;}
function setEdge(on){
  edgeOnly=on;$('#edgeBtn').classList.toggle('on',on);
  if(G){layoutTray();tray.scrollTop=0;tray.scrollLeft=0;updateLane();}
  jgSave();
}
// ふちのピースが置き場に残っていなければ、自動で「ふちだけ」を解除
function checkEdge(){if(edgeOnly&&!trayList.some(isEdge))setEdge(false);}
function posOf(p){return p.where==='tray'?[G.tray.x+p.tx-tray.scrollLeft,G.tray.y+p.ty-tray.scrollTop]:[p.x,p.y];}
function saveF(p){p.fx=(p.x-G.bx)/G.side;p.fy=(p.y-G.by)/G.side;}

function layoutTray(){
  const {tray:t,S,slot,land}=G,vis=visTray(),n=vis.length,pad=Math.ceil((S-slot)/2)+4;
  trayList.forEach(p=>{p.el.style.display=vis.includes(p)?'':'none';});
  Object.assign(tray.style,{left:t.x+'px',top:t.y+'px',width:t.w+'px',height:t.h+'px'});
  tray.classList.toggle('h',!land);
  if(land){
    const cols=Math.max(1,Math.floor((t.w-2*pad)/slot)),off=(t.w-cols*slot)/2;
    G.tcols=cols;G.toff=off;
    vis.forEach((p,i)=>{p.tx=off+(i%cols)*slot+slot/2-S/2;p.ty=pad+Math.floor(i/cols)*slot+slot/2-S/2;placeT(p);});
    trayIn.style.width=t.w+'px';trayIn.style.height=Math.max(t.h,pad*2+Math.ceil(n/cols)*slot)+'px';
  }else{
    const rows=Math.max(1,Math.floor((t.h-2*pad)/slot)),off=(t.h-rows*slot)/2;
    G.trows=rows;G.toff=off;
    vis.forEach((p,i)=>{p.tx=pad+Math.floor(i/rows)*slot+slot/2-S/2;p.ty=off+(i%rows)*slot+slot/2-S/2;placeT(p);});
    trayIn.style.height=t.h+'px';trayIn.style.width=Math.max(t.w,pad*2+Math.ceil(n/rows)*slot)+'px';
  }
  layoutLane();
}
/* ====== スクロール用レーン ====== */
const lane=$('#lane'),track=$('#track'),thumb=$('#thumb');
function laneInfo(){
  const land=G.land,len=land?track.clientHeight:track.clientWidth,
    view=land?tray.clientHeight:tray.clientWidth,full=land?tray.scrollHeight:tray.scrollWidth,
    max=Math.max(0,full-view),pos=Math.max(0,Math.min(max,land?tray.scrollTop:tray.scrollLeft)),
    th=max?Math.max(48,len*view/full):len;
  return {land,len,th,max,pos};
}
function layoutLane(){
  const l=G.lane;
  Object.assign(lane.style,{left:l.x+'px',top:l.y+'px',width:l.w+'px',height:l.h+'px'});
  lane.classList.toggle('v',G.land);
  $('#laneUp').textContent=G.land?'▲':'◀';$('#laneDn').textContent=G.land?'▼':'▶';
  updateLane();
}
function updateLane(){
  if(!G)return;
  const {land,len,th,max,pos}=laneInfo(),at=max?(len-th)*pos/max:0;
  thumb.style.opacity=max?.85:.3;
  if(land)Object.assign(thumb.style,{left:'4px',right:'4px',width:'',top:at+'px',height:th+'px',bottom:''});
  else Object.assign(thumb.style,{top:'4px',bottom:'4px',height:'',left:at+'px',width:th+'px',right:''});
}
tray.addEventListener('scroll',updateLane,{passive:true});
function pageScroll(dir){const v=G.land?tray.clientHeight:tray.clientWidth,d=dir*Math.max(G.slot,v*0.7);tray.scrollBy(G.land?{top:d,behavior:'smooth'}:{left:d,behavior:'smooth'});}
$('#laneUp').onclick=()=>pageScroll(-1);
$('#laneDn').onclick=()=>pageScroll(1);
let laneDrag=null;
function lanePos(e){const r=track.getBoundingClientRect();return G.land?e.clientY-r.top:e.clientX-r.left;}
function laneSet(p){
  const {th,len,max}=laneInfo();if(!max)return;
  const v=Math.max(0,Math.min(1,(p-laneDrag.grab)/Math.max(1,len-th)))*max;
  if(G.land)tray.scrollTop=v;else tray.scrollLeft=v;
}
track.addEventListener('pointerdown',e=>{
  if(!G)return;e.preventDefault();
  const p=lanePos(e),{len,th,max,pos}=laneInfo(),at=max?(len-th)*pos/max:0;
  laneDrag={id:e.pointerId,grab:(p>=at&&p<=at+th)?p-at:th/2};
  laneSet(p);try{track.setPointerCapture(e.pointerId);}catch(_){}
});
track.addEventListener('pointermove',e=>{if(laneDrag&&e.pointerId===laneDrag.id){e.preventDefault();laneSet(lanePos(e));}});
track.addEventListener('pointerup',()=>laneDrag=null);
track.addEventListener('pointercancel',()=>laneDrag=null);

function drawBoard(){
  const {side,bx,by}=G;
  boardCv.width=Math.round(side*dpr);boardCv.height=Math.round(side*dpr);
  boardCv.style.width=side+'px';boardCv.style.height=side+'px';
  boardCv.style.transform=`translate(${bx}px,${by}px)`;
  const c=boardCv.getContext('2d');c.setTransform(dpr,0,0,dpr,0,0);
  c.fillStyle='#fff';c.fillRect(0,0,side,side);
  c.globalAlpha=finished?1:(guideOn?0.3:0);
  c.drawImage(boardImg,0,0,side,side);c.globalAlpha=1;
}
function drawMini(){
  if(!G.mini){miniCv.style.display='none';return;}
  const {x,y,s}=G.mini;
  miniCv.style.display='block';
  miniCv.width=Math.round(s*dpr);miniCv.height=Math.round(s*dpr);
  Object.assign(miniCv.style,{width:s+'px',height:s+'px',left:x+'px',top:y+'px'});
  const c=miniCv.getContext('2d');c.setTransform(dpr,0,0,dpr,0,0);
  c.drawImage(boardImg,0,0,s,s);
  const r=Math.max(16,s*0.13);
  c.fillStyle='rgba(255,255,255,.92)';c.beginPath();c.arc(s-r-4,s-r-4,r,0,Math.PI*2);c.fill();
  c.font=`${Math.round(r*1.1)}px sans-serif`;c.textAlign='center';c.textBaseline='middle';c.fillText('🔍',s-r-4,s-r-3);
}
function renderAll(){
  const {side,cw,m,S}=G;
  boardImg.width=Math.round(side*dpr);boardImg.height=Math.round(side*dpr);
  const bc=boardImg.getContext('2d'),iw=curImg.naturalWidth||curImg.width,ih=curImg.naturalHeight||curImg.height,sw=Math.min(iw,ih);
  bc.imageSmoothingQuality='high';
  if(FLIP){bc.setTransform(-1,0,0,1,boardImg.width,0);} // 左右反転
  bc.drawImage(curImg,(iw-sw)/2,(ih-sw)/2,sw,sw,0,0,boardImg.width,boardImg.height);
  bc.setTransform(1,0,0,1,0,0);
  drawBoard();drawMini();
  pieces.forEach(p=>{
    p.path=piecePath(p);
    const cv=p.el;cv.width=Math.round(S*dpr);cv.height=Math.round(S*dpr);
    cv.style.width=S+'px';cv.style.height=S+'px';
    const c=cv.getContext('2d');c.setTransform(dpr,0,0,dpr,0,0);
    c.save();c.clip(p.path);c.drawImage(boardImg,m-p.c*cw,m-p.r*cw,side,side);c.restore();
    c.lineWidth=1.6;c.strokeStyle='rgba(255,255,255,.6)';c.stroke(p.path);
    c.lineWidth=.8;c.strokeStyle='rgba(0,0,0,.25)';c.stroke(p.path);
    if(p.where==='lock'){[p.x,p.y]=tgt(p);placeA(p);}
    else if(p.where==='field'){p.x=clampX(G.bx+p.fx*G.side);p.y=clampY(G.by+p.fy*G.side);placeA(p);}
  });
  layoutTray();
}

// 凸凹の向き:jgH[r*N+c] は (r,c) の上の辺、jgV[r*N+c] は (r,c) の左の辺(+1/−1)。途中保存にも使う
let jgH=[],jgV=[],jgEl=0,jgId='',jgCanSave=false;
function resetPlay(){
  finished=false;edgeOnly=false;$('#edgeBtn').classList.remove('on');placed=0;drag=null;pend=null;hideHint();lastSec=null;
  zTop=10;clearInterval(timer);t0=0;
}
function makePieces(rots){
  pieces.forEach(p=>p.el.remove());pieces=[];
  const H=(r,c)=>jgH[r*N+c],V=(r,c)=>jgV[r*N+c];
  for(let r=0;r<N;r++)for(let c=0;c<N;c++){
    const el=document.createElement('canvas');el.className='pc';
    pieces.push({r,c,el,where:'tray',x:0,y:0,tx:0,ty:0,fx:0,fy:0,z:0,rot:rots[r*N+c],
      e:{t:r===0?0:-H(r,c), b:r===N-1?0:H(r+1,c), l:c===0?0:-V(r,c), r:c===N-1?0:V(r,c+1)}});
  }
}
let jgItem=null; // 遊んでいる絵
async function newGame(it){
  const item=it||curItem();jgItem=item;
  try{curImg=await item.ready;}catch(e){goStart();return;}
  N=selN;ROT=selRot;FLIP=selFlip;resetPlay();
  const rnd=()=>Math.random()<.5?1:-1;
  jgH=Array.from({length:N*N},rnd);jgV=Array.from({length:N*N},rnd);
  makePieces(Array.from({length:N*N},()=>ROT?[0,90,180,270][Math.floor(Math.random()*4)]:0));
  trayList=shuffle(pieces.slice());
  G=geom();renderAll();
  tray.scrollTop=0;tray.scrollLeft=0;
  updateLeft();
  jgEl=0;jgResume();
  playing=true;
  // 途中保存:前の保存を消し、絵 → 状態の順に書く
  const id=Date.now().toString(36)+Math.random().toString(36).slice(2,8);
  jgId=id;jgCanSave=false;jgClear();
  const rec=await jgImgRec(item,curImg);
  if(rec&&jgId===id&&playing){rec.id=id;jgQueue(()=>idbPut('jigsaw-img',rec));jgCanSave=true;jgSave();}
}
function updateLeft(){$('#left').textContent=N*N-placed;}
const fmt=s=>`${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
const jgElapsed=()=>jgEl+(t0?(Date.now()-t0)/1000:0);
function updateTime(){$('#time').textContent=fmt(Math.floor(jgElapsed()));}
function jgPause(){if(t0){jgEl=jgElapsed();t0=0;}clearInterval(timer);}
function jgResume(){t0=Date.now();clearInterval(timer);let n=0;timer=setInterval(()=>{updateTime();if(++n%15===0)jgSave();},1000);updateTime();}

function relayout(){if(!G||!pieces.length)return;G=geom();renderAll();}
let rzT=null;
window.addEventListener('resize',()=>{clearTimeout(rzT);rzT=setTimeout(()=>{
  if($('#play').classList.contains('on')&&!drag)relayout();
  if($('#sdPlay').classList.contains('on')){qpClose();sdLayout();}
},150);});

/* ====== 指での操作 ====== */
function localPt(e){const r=area.getBoundingClientRect();return [e.clientX-r.left,e.clientY-r.top];}
function inTray(px,py){const t=G.tray;return px>=t.x&&px<=t.x+t.w&&py>=t.y&&py<=t.y+t.h;}
function hit(p,px,py){
  const [x,y]=posOf(p),h=G.S/2,lx=px-x-h,ly=py-y-h,a=-p.rot*Math.PI/180,ca=Math.cos(a),sa=Math.sin(a);
  const qx=lx*ca-ly*sa+h,qy=lx*sa+ly*ca+h;
  if(qx<0||qy<0||qx>G.S||qy>G.S)return false;
  return hitCtx.isPointInPath(p.path,qx,qy);
}
function pickPiece(px,py){
  const cand=inTray(px,py)?visTray():pieces.filter(p=>p.where==='field').sort((a,b)=>b.z-a.z);
  for(const p of cand)if(hit(p,px,py))return p;
  // 少し外れていても近いピースをつかめるように
  let best=null,bd=G.cw*0.6;
  for(const p of cand){const [x,y]=posOf(p),d=Math.hypot(px-x-G.S/2,py-y-G.S/2);if(d<bd){bd=d;best=p;}}
  return best;
}
function startDrag(px,py){
  const p=pend.p,[x,y]=posOf(p),fromTray=p.where==='tray';
  if(fromTray)trayList.splice(trayList.indexOf(p),1);
  p.where='drag';p.x=x;p.y=y;p.z=++zTop;p.el.style.zIndex=p.z;
  p.el.classList.add('drag');p.el.classList.remove('hint');placeA(p);
  drag={p,id:pend.id,ox:pend.sx-x,oy:pend.sy-y,sx:pend.sx,sy:pend.sy,t:pend.t,fromTray,dist:0};
  pend=null;
}
area.addEventListener('pointerdown',e=>{
  ensureAudio();
  if(e.target===miniCv||e.target.closest('#lane')||drag||pend||!playing)return;
  const [px,py]=localPt(e),p=pickPiece(px,py);if(!p)return;
  pend={p,id:e.pointerId,sx:px,sy:py,t:Date.now()};
  if(p.where!=='tray'){ // 盤面上のピースはすぐつかむ
    e.preventDefault();startDrag(px,py);
    try{area.setPointerCapture(e.pointerId);}catch(_){}
  }
});
area.addEventListener('pointermove',e=>{
  const [px,py]=localPt(e);
  if(pend&&e.pointerId===pend.id){ // 置き場のピース:少し動いたらつかむ(縦/横のスワイプはスクロール)
    if(Math.hypot(px-pend.sx,py-pend.sy)<10)return;
    startDrag(px,py);try{area.setPointerCapture(e.pointerId);}catch(_){}
  }
  if(!drag||e.pointerId!==drag.id)return;
  e.preventDefault();
  const p=drag.p;
  drag.dist=Math.max(drag.dist,Math.hypot(px-drag.sx,py-drag.sy));
  p.x=clampX(px-drag.ox);p.y=clampY(py-drag.oy);setTf(p,p.x,p.y);
});
// つかんでいる間は画面がスクロールしないように
document.addEventListener('touchmove',e=>{if(drag)e.preventDefault();},{passive:false});
document.addEventListener('gesturestart',e=>e.preventDefault());

function rotate(p){
  p.rot+=90;p.el.classList.add('spin');
  if(p.where==='tray')setTf(p,p.tx,p.ty);else setTf(p,p.x,p.y);
  setTimeout(()=>p.el.classList.remove('spin'),260);
  tone(660,0,.12,.08);
}
function lockPiece(p){
  [p.x,p.y]=tgt(p);p.rot=0;p.where='lock';placeA(p);
  p.el.classList.add('lock');p.el.style.zIndex=1;
  placed++;updateLeft();sndSnap();
  if(placed===N*N)finish();
}
function toTray(p,cx,cy){
  const t=G.tray,lx=cx-t.x+tray.scrollLeft,ly=cy-t.y+tray.scrollTop;let i;
  if(G.land){const col=Math.max(0,Math.min(G.tcols-1,Math.floor((lx-G.toff)/G.slot))),row=Math.max(0,Math.floor(ly/G.slot));i=row*G.tcols+col;}
  else{const row=Math.max(0,Math.min(G.trows-1,Math.floor((ly-G.toff)/G.slot))),col=Math.max(0,Math.floor(lx/G.slot));i=col*G.trows+row;}
  p.where='tray';p.el.style.zIndex=1;
  const vis=visTray(),j=i<vis.length?trayList.indexOf(vis[i]):trayList.length;
  trayList.splice(j,0,p);
  p.el.classList.add('spin');layoutTray();setTimeout(()=>p.el.classList.remove('spin'),260);
}
function drop(p){
  const [tx,ty]=tgt(p);
  if(upright(p)&&Math.hypot(p.x-tx,p.y-ty)<G.cw*0.32){lockPiece(p);checkEdge();return;}
  const cx=p.x+G.S/2,cy=p.y+G.S/2,mg=G.cw*0.3;
  if(cx>G.bx-mg&&cx<G.bx+G.side+mg&&cy>G.by-mg&&cy<G.by+G.side+mg){p.where='field';saveF(p);layoutTray();checkEdge();}
  else toTray(p,cx,cy);
}
function endPointer(e,cancel){
  if(pend&&e.pointerId===pend.id){ // その場で軽くタップ → 回転
    const p=pend.p;pend=null;
    if(!cancel&&ROT){rotate(p);jgSave();}
    return;
  }
  if(!drag||e.pointerId!==drag.id)return;
  const d=drag,p=d.p;drag=null;p.el.classList.remove('drag');
  if(!cancel&&ROT&&!d.fromTray&&d.dist<10&&Date.now()-d.t<600){p.where='field';rotate(p);saveF(p);jgSave();return;}
  drop(p);jgSave();
}
area.addEventListener('pointerup',e=>endPointer(e,false));
area.addEventListener('pointercancel',e=>endPointer(e,true));

/* ====== 完成 ====== */
function finish(){
  jgPause();playing=false;finished=true;
  const sec=Math.floor(jgElapsed());
  jgCanSave=false;jgClear();jgContData=null;
  recordPlay('jigsaw');
  setTimeout(()=>{drawBoard();pieces.forEach(p=>p.el.style.opacity=0);sndDone();},350);
  lastSec=sec;$('#doneMsg').textContent=doneText(sec);
  $('#doneGift').style.display='none';
  albAddSafe(jgItem).then(g=>{$('#doneGift').style.display=g?'':'none';});
  donePrep(jgItem,'#doneSave');
  setTimeout(()=>$('#doneOv').classList.add('on'),1700);
}
// 利用履歴(遊んだ日時と、どのパズルか)。今は端末内に置くだけ。のちに別端末で見られる仕組みへつなぐ
const playLog=[];
function recordPlay(game){
  const rec={at:new Date().toISOString(),game:game==='sudoku'?'sudoku':'jigsaw'};
  playLog.push(rec);
  try{const k='jigsaw-log';let a=[];try{a=JSON.parse(localStorage.getItem(k)||'[]');}catch(_){}if(!Array.isArray(a))a=[];a=a.filter(r=>r&&typeof r.at==='string').slice(-500);a.push(rec);localStorage.setItem(k,JSON.stringify(a));}catch(e){}
}

/* ====== ボタン類 ====== */
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('on',s.id===id));}
// 戻る・やめる:遊んでいる途中なら保存してから開始画面へ(次は「続きから」)
// 戻る・やめる:遊んでいる途中なら保存してから最初の画面へ(次は「続きから」)
function goStart(){if(playing){jgPause();jgSave();}playing=false;clearInterval(timer);hideHint();show('menu');renderJgCont();}
function jgStartNew(){show('play');requestAnimationFrame(()=>newGame());}
$('#goBtn').onclick=()=>{ensureAudio();if(jgContData)$('#jgNewOv').classList.add('on');else jgStartNew();};
$('#backBtn').onclick=()=>{
  if(!playing){goStart();return;}
  const p=$('#quitOv p');p.dataset.t=jgCanSave?'quitP':'quitP0';p.textContent=t(p.dataset.t);
  $('#quitOv').classList.add('on');
};
$('#quitOv').onclick=e=>{if(e.target.id==='quitOv')$('#quitOv').classList.remove('on');};
$('#quitNo').onclick=()=>$('#quitOv').classList.remove('on');
$('#quitYes').onclick=()=>{$('#quitOv').classList.remove('on');goStart();};
$('#againBtn').onclick=()=>{$('#doneOv').classList.remove('on');newGame(jgItem);};
$('#otherBtn').onclick=()=>{$('#doneOv').classList.remove('on');goStart();};
function setTg(btn,on){btn.classList.toggle('on',on);btn.querySelector('b').textContent=on?'あり':'なし';}
$('#setBtn').onclick=()=>{setTg($('#soundBtn'),soundOn);$('#setOv').classList.add('on');};
$('#setClose').onclick=()=>$('#setOv').classList.remove('on');
$('#guideBtn').onclick=e=>{guideOn=!guideOn;setTg(e.currentTarget,guideOn);if(G)drawBoard();};
$('#miniBtn').onclick=e=>{miniOn=!miniOn;setTg(e.currentTarget,miniOn);if(G&&!drag)relayout();};
$('#soundBtn').onclick=e=>{soundOn=!soundOn;ensureAudio();setTg(e.currentTarget,soundOn);};
function openMihon(){
  if(!G)return;
  const cv=$('#mihonCv'),sz=Math.min(window.innerWidth*0.75,window.innerHeight*0.65,640);
  cv.width=Math.round(sz*dpr);cv.height=Math.round(sz*dpr);cv.style.width=sz+'px';cv.style.height=sz+'px';
  cv.getContext('2d').drawImage(boardImg,0,0,cv.width,cv.height);
  $('#mihonOv').classList.add('on');
}
$('#mihonBtn').onclick=openMihon;
$('#edgeBtn').onclick=()=>{if(playing&&!drag)setEdge(!edgeOnly);};
miniCv.onclick=openMihon;
$('#mihonClose').onclick=()=>$('#mihonOv').classList.remove('on');
$('#mihonOv').onclick=e=>{if(e.target.id==='mihonOv')$('#mihonOv').classList.remove('on');};
const p0Edge=l=>edgeOnly&&l.some(isEdge);
function hideHint(){clearTimeout(hintTimer);targetEl.style.display='none';pieces.forEach(p=>p.el.classList.remove('hint'));}
$('#hintBtn').onclick=()=>{
  if(!playing||drag)return;
  hideHint();
  let loose=pieces.filter(p=>(p.where==='tray'&&visTray().includes(p))||p.where==='field');
  if(!loose.length)loose=pieces.filter(p=>p.where==='tray'||p.where==='field');
  if(!loose.length)return;
  if(p0Edge(loose))loose=loose.filter(isEdge);
  const p=loose[Math.floor(Math.random()*loose.length)];
  if(!upright(p)){p.rot=Math.ceil(p.rot/360)*360;p.el.classList.add('spin');if(p.where==='tray')setTf(p,p.tx,p.ty);else setTf(p,p.x,p.y);setTimeout(()=>p.el.classList.remove('spin'),260);}
  if(p.where==='tray'){
    if(G.land)tray.scrollTo({top:Math.max(0,p.ty-(G.tray.h-G.S)/2),behavior:'smooth'});
    else tray.scrollTo({left:Math.max(0,p.tx-(G.tray.w-G.S)/2),behavior:'smooth'});
  }else{p.z=++zTop;p.el.style.zIndex=p.z;}
  void p.el.offsetWidth;p.el.classList.add('hint');
  Object.assign(targetEl.style,{display:'block',left:(G.bx+p.c*G.cw)+'px',top:(G.by+p.r*G.cw)+'px',width:G.cw+'px',height:G.cw+'px'});
  targetEl.style.animation='none';void targetEl.offsetWidth;targetEl.style.animation='';
  hintTimer=setTimeout(hideHint,3300);
  jgSave();
};

/* ====== ジグソーの途中保存(IndexedDB。保存は1つだけ) ====== */
// 'jigsaw-img':絵(サンプルは番号、写真は正方形に切り出したJPEG) / 'jigsaw':ピースの状態。同じ id で組にする
const JG_DB='neko-puzzle',JG_ST='save';
let jgDbP=null,jgQ=Promise.resolve(),jgContData=null,jgThumbUrl=null;
// iPadのSafariは、ページを開いた直後に保存場所(IndexedDB)を開けないことがある。
// 開けなかったときは少し待って開き直す(最大4回)。それでもだめなら、そのとき使う処理には「読めなかった」(IDB_ERR)を返し、
// 「保存がない」と区別する(保存がないと思って上書きしないため)。次に使うときにまた開き直す
const IDB_ERR=Object.freeze({idbErr:true});
const idbDiag={ok:false,fails:0,last:''};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
function idbOpenOnce(){
  return new Promise((res,rej)=>{
    let done=false;const tm=setTimeout(()=>{if(!done){done=true;rej(new Error('timeout'));}},4000);
    try{
      const q=indexedDB.open(JG_DB,1);
      q.onupgradeneeded=()=>{q.result.createObjectStore(JG_ST);};
      q.onsuccess=()=>{
        const db=q.result;if(done){try{db.close();}catch(e){}return;}
        done=true;clearTimeout(tm);
        db.onclose=()=>{jgDbP=null;};
        db.onversionchange=()=>{try{db.close();}catch(e){}jgDbP=null;};
        res(db);
      };
      q.onerror=()=>{if(done)return;done=true;clearTimeout(tm);rej(q.error||new Error('open'));};
    }catch(e){done=true;clearTimeout(tm);rej(e);}
  });
}
let idbFailUntil=0; // 開けなかった直後は、しばらく開き直さない(待ち時間が重ならないように)
function jgDb(){
  if(!jgDbP&&Date.now()<idbFailUntil)return Promise.resolve(null);
  if(!jgDbP){
    const p=(async()=>{
      // Safari の対策:先に databases() を呼ぶと開けるようになることがある
      try{if(indexedDB.databases)await Promise.race([indexedDB.databases().catch(()=>{}),sleep(800)]);}catch(e){}
      for(let i=0;i<3;i++){
        try{const db=await idbOpenOnce();idbDiag.ok=true;return db;}
        catch(e){idbDiag.fails++;idbDiag.last=String(e&&e.name||e&&e.message||'error').slice(0,40);if(i<2)await sleep(300*(i+1));}
      }
      idbDiag.ok=false;idbFailUntil=Date.now()+5000;
      if(jgDbP===p)jgDbP=null;
      return null;
    })();
    jgDbP=p;
  }
  return jgDbP;
}
const IDB_NODB=Object.freeze({idbErr:true,noDb:true});
function idbReq1(mode,fn){
  return jgDb().then(db=>new Promise(res=>{
    if(!db){res(IDB_NODB);return;}
    try{const tx=db.transaction(JG_ST,mode),r=fn(tx.objectStore(JG_ST));tx.oncomplete=()=>res(r&&'result' in r?r.result:true);tx.onerror=tx.onabort=()=>res(IDB_ERR);}
    catch(e){jgDbP=null;res(IDB_ERR);} // 接続が切れていたら次は開き直す
  }));
}
// 開いていた接続で失敗したら、1回だけ開き直してやり直す(開けなかったときはやり直さない)
async function idbReq(mode,fn){
  let r=await idbReq1(mode,fn);
  if(r===IDB_ERR){jgDbP=null;r=await idbReq1(mode,fn);}
  return r===IDB_NODB?IDB_ERR:r;
}
const idbPut=(k,v)=>idbReq('readwrite',s=>{s.put(v,k);});
const idbGet=k=>idbReq('readonly',s=>s.get(k));
const idbDel=k=>idbReq('readwrite',s=>{s.delete(k);});
// 書き込み・読み込みは順番どおりに行う
const jgQueue=f=>(jgQ=jgQ.then(()=>f(),()=>f()));
function jgClear(){jgQueue(()=>Promise.all([idbDel('jigsaw'),idbDel('jigsaw-img')]));}
// 途中保存用の絵の記録(ジグソー・数独で共通)。猫の写真なら取得元とアドレスも残す(クリア時にごほうびへ入れるため)
function jgImgRec(item,img){
  const idx=images.indexOf(item);
  if(item.nm&&idx>=0&&idx<SAMPLE_N)return Promise.resolve({kind:'sample',idx});
  const meta=catMetaOk(item)?{src:item.src,ou:item.ou}:null;
  return imgBlobRec(img).then(r=>{if(r&&meta)r.cat=meta;return r;});
}
function imgBlobRec(img){
  return new Promise(res=>{try{
    const iw=img.naturalWidth||img.width,ih=img.naturalHeight||img.height,sw=Math.min(iw,ih),o=Math.max(1,Math.min(1600,sw));
    const cv=document.createElement('canvas');cv.width=o;cv.height=o;
    const c=cv.getContext('2d');c.imageSmoothingQuality='high';c.drawImage(img,(iw-sw)/2,(ih-sw)/2,sw,sw,0,0,o,o);
    cv.toBlob(b=>res(b&&/^image\//.test(b.type)?{kind:'blob',blob:b}:null),'image/jpeg',0.9);
  }catch(e){res(null);}}); // 持ち出しが許可されていない画像は保存しない
}
function jgSnap(){
  const pc=pieces.map(p=>{
    if(p.where==='drag'&&G)saveF(p);
    const w=p.where==='lock'?2:(p.where==='field'||p.where==='drag')?1:0;
    return {w,fx:w===1?Math.round(p.fx*1e5)/1e5:0,fy:w===1?Math.round(p.fy*1e5)/1e5:0,rot:w===2?0:((p.rot%360)+360)%360,z:w===1?p.z:0};
  });
  return {v:1,id:jgId,N,rot:ROT,flip:FLIP,h:jgH.slice(),vv:jgV.slice(),pc,tray:trayList.map(p=>pieces.indexOf(p)),el:Math.floor(jgElapsed()),edge:edgeOnly};
}
function jgSave(){if(!playing||!jgCanSave||!G)return;const s=jgSnap();jgQueue(()=>idbPut('jigsaw',s));}
// 保存データは形式を確かめてから使う
function jgValid(s,im){
  if(!s||typeof s!=='object'||s.v!==1||typeof s.id!=='string'||!im||typeof im!=='object'||im.id!==s.id)return false;
  if(!COUNTS.includes(s.N))return false;
  const n=s.N*s.N,pm=a=>Array.isArray(a)&&a.length===n&&a.every(x=>x===1||x===-1);
  if(s.flip!==undefined&&typeof s.flip!=='boolean')return false;
  if(typeof s.rot!=='boolean'||typeof s.edge!=='boolean'||!pm(s.h)||!pm(s.vv))return false;
  if(!Array.isArray(s.pc)||s.pc.length!==n)return false;
  for(const p of s.pc){
    if(!p||typeof p!=='object'||![0,1,2].includes(p.w)||![0,90,180,270].includes(p.rot))return false;
    if((!s.rot||p.w===2)&&p.rot)return false;
    if(p.w===1&&!(Number.isFinite(p.fx)&&Number.isFinite(p.fy)&&Math.abs(p.fx)<3&&Math.abs(p.fy)<3&&Number.isInteger(p.z)&&p.z>=0&&p.z<1e7))return false;
  }
  if(s.pc.every(p=>p.w===2))return false;
  const tr=[];s.pc.forEach((p,i)=>{if(p.w===0)tr.push(i);});
  if(!Array.isArray(s.tray)||s.tray.length!==tr.length)return false;
  const set=new Set(s.tray);if(set.size!==tr.length||!tr.every(i=>set.has(i)))return false;
  if(!(Number.isFinite(s.el)&&s.el>=0&&s.el<3600000))return false;
  return imRecOk(im);
}
// 保存した絵の記録が正しい形か
function imRecOk(im){
  if(!im||typeof im!=='object')return false;
  if(im.kind==='sample')return Number.isInteger(im.idx)&&im.idx>=0&&im.idx<SAMPLE_N;
  if(im.kind==='blob')return im.blob instanceof Blob&&/^image\/(jpeg|png|webp)$/.test(im.blob.type)&&im.blob.size<20e6&&(im.cat===undefined||catMetaOk(im.cat));
  return false;
}
// 保存した絵の記録から、遊ぶ絵を作る
function itemFromRec(im){
  if(im.kind==='sample')return images[im.idx];
  const url=URL.createObjectURL(im.blob),it=Object.assign({no:0,url,blob:im.blob},loadImg(url));
  if(im.cat){it.src=im.cat.src;it.ou=im.cat.ou;}
  return it;
}
async function jgLoad(){
  const s=await idbGet('jigsaw');if(!s||s===IDB_ERR)return null;
  const im=await idbGet('jigsaw-img');if(im===IDB_ERR)return null; // 読めなかったときは消さない
  if(!jgValid(s,im)){await Promise.all([idbDel('jigsaw'),idbDel('jigsaw-img')]);return null;}
  return {s,im};
}
async function renderJgCont(){
  const d=await jgQueue(jgLoad),cb=$('#jgCont');
  jgContData=d;
  if(jgThumbUrl){URL.revokeObjectURL(jgThumbUrl);jgThumbUrl=null;}
  if(!d){cb.style.display='none';cb.replaceChildren();renderMenuNew();return;}
  let src;
  if(d.im.kind==='sample')src=images[d.im.idx].url;else{jgThumbUrl=URL.createObjectURL(d.im.blob);src=jgThumbUrl;}
  const im=mk('img');im.alt='';im.src=safeImgUrl(src);if(d.s.flip)im.className='flip';
  const left=d.s.pc.filter(p=>p.w!==2).length,tx=mk('span','ctx');
  tx.append(mk('span','ct',t('sdCont')),mk('small',null,'🧩 '+t('gJig')+' ・ '+t('left1')+' '+left+' '+t('left2')+' ・ ⏱ '+fmt(Math.floor(d.s.el))));
  cb.replaceChildren(im,tx);cb.style.display='';renderMenuNew();
}
async function jgRestore(d){
  const {s,im}=d,item=itemFromRec(im);jgItem=item;
  try{curImg=await item.ready;}catch(e){jgClear();jgContData=null;goStart();return;}
  N=s.N;ROT=s.rot;FLIP=!!s.flip;selN=N;selRot=ROT;selFlip=FLIP;renderCounts();renderRots();renderFlips();
  jgH=s.h.slice();jgV=s.vv.slice();jgId=s.id;
  resetPlay();
  makePieces(s.pc.map(p=>p.rot));
  pieces.forEach((p,i)=>{
    const q=s.pc[i];
    if(q.w===2){p.where='lock';p.el.classList.add('lock');p.el.style.zIndex=1;placed++;}
    else if(q.w===1){p.where='field';p.fx=q.fx;p.fy=q.fy;p.z=q.z;p.el.style.zIndex=q.z;zTop=Math.max(zTop,q.z);}
  });
  trayList=s.tray.map(i=>pieces[i]);
  edgeOnly=s.edge;$('#edgeBtn').classList.toggle('on',edgeOnly);
  G=geom();renderAll();
  tray.scrollTop=0;tray.scrollLeft=0;
  updateLeft();
  jgEl=s.el;jgResume();
  playing=true;jgCanSave=true;
  checkEdge();
}
$('#jgCont').onclick=()=>{ensureAudio();const d=jgContData;if(!d)return;show('play');requestAnimationFrame(()=>jgRestore(d));};
$('#jgNewOv').onclick=e=>{if(e.target.id==='jgNewOv')$('#jgNewOv').classList.remove('on');};
$('#jgNewNo').onclick=()=>{$('#jgNewOv').classList.remove('on');$('#jgCont').onclick();};
$('#jgNewYes').onclick=()=>{$('#jgNewOv').classList.remove('on');jgStartNew();};
// 画面を離れたら時間を止めて保存する
document.addEventListener('visibilitychange',()=>{
  if(!playing)return;
  if(document.hidden){jgPause();jgSave();}
  else if($('#play').classList.contains('on'))jgResume();
});
window.addEventListener('pagehide',()=>{if(playing)jgSave();});
window.JG_READY=true;

/* ====== 最初の画面(絵を選ぶ → 遊ぶパズルを選ぶ) ====== */
document.querySelectorAll('.mnb').forEach(b=>{b.onclick=()=>{show('menu');renderJgCont();if(window.SD_READY)renderSdCont();};});
// 読み込めていない写真では遊べない(読み直しを試す)
function picNotReady(){const it=curItem();if(!it||!it.wait)return false;toast('catNotReady',3200);return true;}
$('#gJigBtn').onclick=()=>{ensureAudio();if(picNotReady())return;renderSel();show('start');$('#start').scrollTop=0;};
$('#sdCard').onclick=()=>{ensureAudio();sdRenderStart();show('sdStart');$('#sdStart').scrollTop=0;};
// 「続きから」があるときは「新しく始める」の見出しを出す
function renderMenuNew(){$('#menuHNew').style.display=$('#jgCont').style.display!=='none'||$('#sdCont').style.display!=='none'?'':'none';}
let toastT=null;
function toast(key,ms){const e=$('#toast');e.textContent=t(key);e.classList.add('on');clearTimeout(toastT);if(ms)toastT=setTimeout(()=>e.classList.remove('on'),ms);}
function hideToast(){clearTimeout(toastT);$('#toast').classList.remove('on');}

/* ====== 数独:問題づくり ====== */
// 盤は長さ81の配列(0=空き)。r=行, c=列, b=3×3のかたまり
const SD_LV=[ // giv:最初の数字の目安 / singles:基本の解き方(そこにしか入らない)だけで解ける問題にする
  {giv:36,singles:true},{giv:31,singles:true},{giv:28,singles:false},{giv:22,singles:false}];
const sdR=i=>(i/9)|0, sdC=i=>i%9, sdB=i=>((i/27)|0)*3+((i%9)/3|0);
const SD_UNITS=[];
for(let k=0;k<9;k++){
  SD_UNITS.push([...Array(9)].map((_,j)=>k*9+j));
  SD_UNITS.push([...Array(9)].map((_,j)=>j*9+k));
  SD_UNITS.push([...Array(9)].map((_,j)=>(((k/3)|0)*3+((j/3)|0))*9+(k%3)*3+j%3));
}
const SD_PEERS=[...Array(81)].map((_,i)=>[...Array(81).keys()].filter(j=>j!==i&&(sdR(j)===sdR(i)||sdC(j)===sdC(i)||sdB(j)===sdB(i))));
const ALL=0x3FE; // 1〜9のビット
const bitCnt=m=>{let n=0;while(m){m&=m-1;n++;}return n;};
const bitDig=m=>31-Math.clz32(m);
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
// 解の数を数える(limit個で打ち切り)
function sdCount(g,limit){
  const a=g.slice(),rm=Array(9).fill(0),cm=Array(9).fill(0),bm=Array(9).fill(0);
  for(let i=0;i<81;i++)if(a[i]){const b=1<<a[i],r=sdR(i),c=sdC(i),x=sdB(i);if((rm[r]|cm[c]|bm[x])&b)return 0;rm[r]|=b;cm[c]|=b;bm[x]|=b;}
  let n=0;
  const rec=()=>{
    let best=-1,bc=10,bmask=0;
    for(let i=0;i<81;i++)if(!a[i]){const m=ALL&~(rm[sdR(i)]|cm[sdC(i)]|bm[sdB(i)]),k=bitCnt(m);if(k<bc){bc=k;best=i;bmask=m;if(!k)return;}}
    if(best<0){n++;return;}
    const r=sdR(best),c=sdC(best),x=sdB(best);
    for(let d=1;d<=9;d++)if(bmask&(1<<d)){
      const b=1<<d;a[best]=d;rm[r]|=b;cm[c]|=b;bm[x]|=b;rec();
      a[best]=0;rm[r]&=~b;cm[c]&=~b;bm[x]&=~b;if(n>=limit)return;
    }
  };
  rec();return n;
}
// 完成した盤をランダムに作る
function sdFill(){
  const a=Array(81).fill(0);
  const rec=i=>{
    if(i===81)return true;
    let m=ALL;for(const p of SD_PEERS[i])if(a[p])m&=~(1<<a[p]);
    for(const d of shuffle([1,2,3,4,5,6,7,8,9]))if(m&(1<<d)){a[i]=d;if(rec(i+1))return true;}
    a[i]=0;return false;
  };
  rec(0);return a;
}
const sdCand=(a,i)=>{let m=ALL;for(const p of SD_PEERS[i])if(a[p])m&=~(1<<a[p]);return m;};
// 「このマスにはこれしか入らない」「この数字はここにしか入らない」だけで解けるか
function sdSingles(g){
  const a=g.slice();
  for(;;){
    let prog=false,empty=0;
    for(let i=0;i<81;i++)if(!a[i]){empty++;const m=sdCand(a,i);if(!m)return false;if(bitCnt(m)===1){a[i]=bitDig(m);prog=true;}}
    if(!empty)return true;
    if(prog)continue;
    for(const u of SD_UNITS){
      for(let d=1;d<=9;d++){
        let at=-1,n=0,has=false;
        for(const i of u){if(a[i]===d){has=true;break;}if(!a[i]&&(sdCand(a,i)&(1<<d))){n++;at=i;}}
        if(has)continue;if(!n)return false;
        if(n===1){a[at]=d;prog=true;}
      }
    }
    if(!prog)return false;
  }
}
function sdMake(lv){
  const L=SD_LV[lv],tEnd=Date.now()+(lv===3?1200:400);let best=null;
  do{
    const sol=sdFill(),g=sol.slice();let giv=81;
    for(const i of shuffle([...Array(81).keys()])){
      if(giv<=L.giv)break;
      const v=g[i];g[i]=0;
      if(sdCount(g,2)!==1||(L.singles&&!sdSingles(g)))g[i]=v;else giv--;
    }
    if(!best||giv<best.giv)best={g,sol,giv};
  }while(best.giv>L.giv&&Date.now()<tEnd);
  return best;
}

/* ====== 数独:遊ぶ ====== */
const SD_KEY='sudoku-save',SD_OPT='sudoku-opt';
let sd=null,sdSel=-1,sdMemoMode=false,sdUndo=[],sdT0=0,sdTimer=null,sdPlaying=false,sdLastSec=null,sdSelLv=0;
const sdOpt={err:false,same:true}; // 間違いの赤表示は、はじめは「なし」
try{const o=JSON.parse(localStorage.getItem(SD_OPT)||'null');if(o&&typeof o==='object'){if(o.v===2&&typeof o.err==='boolean')sdOpt.err=o.err;if(typeof o.same==='boolean')sdOpt.same=o.same;if([0,1,2,3].includes(o.lv))sdSelLv=o.lv;}}catch(e){}
function sdSaveOpt(){try{localStorage.setItem(SD_OPT,JSON.stringify({v:2,err:sdOpt.err,same:sdOpt.same,lv:sdSelLv}));}catch(e){}}
const sdElapsed=()=>sd?sd.el+(sdT0?(Date.now()-sdT0)/1000:0):0;
function sdSave(){
  if(!sd)return;
  try{localStorage.setItem(SD_KEY,JSON.stringify({v:1,lv:sd.lv,giv:sd.giv.join(''),sol:sd.sol.join(''),cur:sd.cur.join(''),hint:sd.hint.join(''),memo:sd.memo,el:Math.floor(sdElapsed()),rid:sd.rid||'',img:sd.img||'',rv:sd.rv||0,nw:sd.nw||0}));}catch(e){}
}
// 保存データは形式を確かめてから使う
function sdLoad(){
  try{
    const o=JSON.parse(localStorage.getItem(SD_KEY)||'null');
    if(!o||o.v!==1||![0,1,2,3].includes(o.lv))return null;
    if(!/^[0-9]{81}$/.test(o.giv)||!/^[1-9]{81}$/.test(o.sol)||!/^[0-9]{81}$/.test(o.cur)||!/^[01]{81}$/.test(o.hint))return null;
    if(!Array.isArray(o.memo)||o.memo.length!==81||!o.memo.every(m=>Number.isInteger(m)&&m>=0&&m<=ALL))return null;
    if(typeof o.el!=='number'||!isFinite(o.el)||o.el<0)return null;
    const giv=[...o.giv].map(Number),sol=[...o.sol].map(Number),cur=[...o.cur].map(Number),hint=[...o.hint].map(Number);
    for(let i=0;i<81;i++){if(giv[i]&&(giv[i]!==sol[i]||cur[i]!==giv[i]))return null;if(hint[i]&&cur[i]!==sol[i])return null;}
    const rid=typeof o.rid==='string'&&SD_RID.test(o.rid)?o.rid:'';
    // img:絵の記録の id(IndexedDB 'sudoku-img')、rv:絵を見せた3×3(ビット)。古い保存にはないので省略可
    const img=typeof o.img==='string'&&SD_RID.test(o.img)?o.img:'';
    const rv=Number.isInteger(o.rv)&&o.rv>=0&&o.rv<512?o.rv:0;
    // nw:新しい猫の番号(クリアすると出る。0=出た猫・イラストで遊んでいる)
    const nw=Number.isInteger(o.nw)&&o.nw>=1&&o.nw<=99999?o.nw:0;
    return {lv:o.lv,giv,sol,cur,hint,memo:o.memo.slice(),el:Math.min(o.el,360000),rid,img,rv,nw};
  }catch(e){return null;}
}
function sdClearSave(){try{localStorage.removeItem(SD_KEY);}catch(e){}jgQueue(()=>idbDel('sudoku-img'));}
// 数独の絵(遊ぶ絵 sdItem)。盤の後ろに置き、3×3ごとに見せる
let sdItem=null;
function sdSetPic(item){sdItem=item;$('#sdImg').src=safeImgUrl(item&&item.url);}
// 絵の記録を書く(続きから遊ぶとき同じ絵を出すため)
async function sdPicRec(item){
  const id=newId();sd.img=id;
  let img;try{img=await item.ready;}catch(e){return;}
  const rec=await jgImgRec(item,img);
  if(rec&&sd&&sd.img===id){rec.id=id;jgQueue(()=>idbPut('sudoku-img',rec));}
}

/* ====== 数独:記録(同じ問題に繰り返し挑戦) ====== */
// localStorage 'sudoku-recs' に {v:1, list:[{id, lv, giv, sol, best:{t:秒, h:ヒント数}, tries, last:最後に遊んだ時刻(ms), fav}]}
// 残すのは ★の問題(30問まで)+ ★なしの最近の10問
const SD_RECS='sudoku-recs',SD_RID=/^[a-z0-9]{4,24}$/,SD_FAV_MAX=30,SD_RECENT_MAX=10;
let sdDoneRec=null,sdPending=null;
function sdRecsLoad(){
  try{
    const o=JSON.parse(localStorage.getItem(SD_RECS)||'null');
    if(!o||o.v!==1||!Array.isArray(o.list))return [];
    const seen=new Set();
    return o.list.filter(r=>{
      if(!r||typeof r!=='object'||typeof r.id!=='string'||!SD_RID.test(r.id)||seen.has(r.id)||![0,1,2,3].includes(r.lv))return false;
      if(typeof r.giv!=='string'||typeof r.sol!=='string'||!/^[0-9]{81}$/.test(r.giv)||!/^[1-9]{81}$/.test(r.sol))return false;
      for(let i=0;i<81;i++)if(r.giv[i]!=='0'&&r.giv[i]!==r.sol[i])return false;
      const b=r.best;
      if(!b||!Number.isInteger(b.t)||b.t<0||b.t>360000||!Number.isInteger(b.h)||b.h<0||b.h>81)return false;
      if(!Number.isInteger(r.tries)||r.tries<1||r.tries>99999||!Number.isFinite(r.last)||typeof r.fav!=='boolean')return false;
      seen.add(r.id);return true;
    }).map(r=>({id:r.id,lv:r.lv,giv:r.giv,sol:r.sol,best:{t:r.best.t,h:r.best.h},tries:r.tries,last:r.last,fav:r.fav}));
  }catch(e){return [];}
}
function sdRecsSave(a){
  const fav=a.filter(r=>r.fav).slice(0,SD_FAV_MAX),rest=a.filter(r=>!r.fav).sort((x,y)=>y.last-x.last).slice(0,SD_RECENT_MAX);
  try{localStorage.setItem(SD_RECS,JSON.stringify({v:1,list:fav.concat(rest)}));}catch(e){}
}
const sdHintTxt=h=>kana?(h?'ヒント '+h+'かい':'ヒント なし'):(h?'ヒント'+h+'回':'ヒントなし');
const sdTryTxt=n=>kana?n+'かいめの ちょうせん':n+'回目の挑戦';
const sdTriesTxt=n=>kana?'ちょうせん '+n+'かい':'挑戦'+n+'回';
const sdBestTxt=b=>fmt(b.t)+'('+sdHintTxt(b.h)+')';
// 完成したときに記録を付ける
function sdRecordClear(sec){
  const recs=sdRecsLoad(),giv=sd.giv.join(''),h=sd.hint.reduce((a,b)=>a+b,0),now=Date.now();
  let r=(sd.rid&&recs.find(x=>x.id===sd.rid))||recs.find(x=>x.giv===giv);
  const res={sec,h,first:false,newRec:false,prev:null};
  if(!r){
    r={id:now.toString(36)+Math.random().toString(36).slice(2,8),lv:sd.lv,giv,sol:sd.sol.join(''),best:{t:sec,h},tries:1,last:now,fav:false};
    recs.push(r);res.first=true;
  }else{
    res.prev={t:r.best.t,h:r.best.h};r.tries++;r.last=now;
    if(sec<r.best.t){r.best={t:sec,h};res.newRec=true;}
  }
  res.id=r.id;sdRecsSave(recs);
  sdDoneRec=res;
}
function sdRenderDone(){
  const d=sdDoneRec;if(!d)return;
  const r=sdRecsLoad().find(x=>x.id===d.id);
  $('#sdNewRec').style.display=d.newRec?'':'none';
  let s;
  if(d.first)s=t('sdFirst')+'('+sdHintTxt(d.h)+')';
  else if(d.newRec)s=t('sdPrev')+' '+sdBestTxt(d.prev)+' ・ '+sdTryTxt(r?r.tries:0);
  else s=t('sdBest')+' '+sdBestTxt(r?r.best:d.prev)+' ・ '+sdTryTxt(r?r.tries:0);
  if(!d.first&&d.h)s+=kana?'(こんかいは '+sdHintTxt(d.h)+')':'(今回は'+sdHintTxt(d.h)+')';
  $('#sdRecInfo').textContent=s;
  $('#sdRetryBtn').style.display=r?'':'none';
  $('#sdFavBtn').style.display=r?'':'none';
  if(r)setTg($('#sdFavBtn'),r.fav);
}
// ★の付け外し。付けられたら true
function sdToggleFav(id){
  const recs=sdRecsLoad(),r=recs.find(x=>x.id===id);if(!r)return false;
  if(!r.fav&&recs.filter(x=>x.fav).length>=SD_FAV_MAX){toast('sdFavFull',2600);return false;}
  r.fav=!r.fav;sdRecsSave(recs);tone(r.fav?990:660,0,.12,.08);return true;
}
function sdRenderRecs(){
  const recs=sdRecsLoad(),box=$('#sdRecs');box.replaceChildren();
  $('#sdRecH').style.display=recs.length?'':'none';
  const byLast=(x,y)=>y.last-x.last,fav=recs.filter(r=>r.fav).sort(byLast),rest=recs.filter(r=>!r.fav).sort(byLast);
  const row=r=>{
    const w=mk('div','rec'),b=document.createElement('button');b.className='rp';
    const dt=new Date(r.last),bt=mk('span','bt');
    bt.append(mk('b',null,'⏱ '+sdBestTxt(r.best)),mk('small',null,sdTriesTxt(r.tries)+' ・ '+(dt.getMonth()+1)+'/'+dt.getDate()));
    b.append(mk('span','lv',t('s'+r.lv)),bt,mk('span','go2',t('sdPlayGo')));
    b.onclick=()=>{ensureAudio();sdStartRec(r.id);};
    const f=document.createElement('button');f.className='fv'+(r.fav?' on':'');
    f.append(mk('span','st',r.fav?'★':'☆'),mk('span',null,t('sdFavS')));
    f.onclick=()=>{ensureAudio();if(sdToggleFav(r.id))sdRenderRecs();};
    w.append(b,f);return w;
  };
  if(fav.length){box.appendChild(mk('h3',null,t('sdFavH')));fav.forEach(r=>box.appendChild(row(r)));}
  if(rest.length){box.appendChild(mk('h3',null,t('sdRecentH')));rest.forEach(r=>box.appendChild(row(r)));}
}
// 記録のある問題を最初から遊ぶ(途中の問題があれば確認)
function sdStartRec(id){
  if(sdMode()==='wait'){toast('catLoading',2600);return;}
  if(sdLoad()){sdPending=()=>sdPlayRec(id);$('#sdNewOv').classList.add('on');}
  else sdPlayRec(id);
}
function sdPlayRec(id){
  const r=sdRecsLoad().find(x=>x.id===id);if(!r){sdRenderStart();return;}
  const pk=sdPick(),item=pk.item;sdSetPic(item);
  qpClose();lpCancel();hideToast();
  sdPlaying=false;clearInterval(sdTimer);sdT0=0;sdClearSave();
  const giv=[...r.giv].map(Number);
  sd={lv:r.lv,giv,sol:[...r.sol].map(Number),cur:giv.slice(),memo:Array(81).fill(0),hint:Array(81).fill(0),el:0,rid:r.id,rv:0,nw:pk.nw};
  sdPicRec(item);
  show('sdPlay');requestAnimationFrame(()=>sdBegin());
}

// 盤のマスと数字ボタンを作る
const sdBoard=$('#sdBoard'),sdCells=[],sdNumBtns=[];
for(let i=0;i<81;i++){
  const r=sdR(i),c=sdC(i),el=mk('div','sc');
  if(c===2||c===5)el.classList.add('b3r');if(c===8)el.classList.add('lc');
  if(r===2||r===5)el.classList.add('b3b');if(r===8)el.classList.add('lr');
  const v=mk('span','v'),mm=mk('div','mm'),ms=[];
  for(let d=1;d<=9;d++){const s=mk('span');ms.push(s);mm.appendChild(s);}
  el.append(v,mm);el.dataset.i=String(i);
  sdCells.push({el,v,mm,ms});sdBoard.appendChild(el);
}
sdBoard.addEventListener('pointerdown',e=>{
  const c=e.target.closest('.sc');if(!c||!sdPlaying)return;
  e.preventDefault();ensureAudio();
  const i=Number(c.dataset.i);if(!(i>=0&&i<81))return;
  sdSel=i;sdDraw();
  // 長押し(0.5秒)で数字の小窓を出す
  lpCancel();
  if(!sdLocked(i)){
    sdCells[i].el.classList.add('hold');
    lp={id:e.pointerId,x:e.clientX,y:e.clientY,i,tm:setTimeout(()=>{const k=lp.i;lpCancel();qpOpen(k);},500)};
  }
});
sdBoard.addEventListener('contextmenu',e=>e.preventDefault());
let lp=null,qpI=-1;
function lpCancel(){if(!lp)return;clearTimeout(lp.tm);sdCells[lp.i].el.classList.remove('hold');lp=null;}
document.addEventListener('pointermove',e=>{if(lp&&e.pointerId===lp.id&&Math.hypot(e.clientX-lp.x,e.clientY-lp.y)>12)lpCancel();});
document.addEventListener('pointerup',e=>{if(lp&&e.pointerId===lp.id)lpCancel();});
document.addEventListener('pointercancel',e=>{if(lp&&e.pointerId===lp.id)lpCancel();});
const qp=$('#qp'),qpBtns=[];
for(let d=1;d<=9;d++){const b=mk('button','qb',d);b.onclick=()=>qpPick(d);qpBtns.push(b);$('#qpN').appendChild(b);}
function qpUpdate(){
  if(!sd||qpI<0)return;
  const cnt=Array(10).fill(0);sd.cur.forEach(v=>cnt[v]++);
  qp.classList.toggle('memo',sdMemoMode);
  qpBtns.forEach((b,k)=>{const d=k+1;b.classList.toggle('full',cnt[d]>=9);b.classList.toggle('mon',sdMemoMode&&!!(sd.memo[qpI]&(1<<d)));});
}
function qpOpen(i){
  if(!sdPlaying||!sd||sdLocked(i))return;
  qpI=i;sdSel=i;sdDraw();
  const r=sdCells[i].el.getBoundingClientRect(),q=Math.round(Math.max(64,Math.min(84,r.width*0.95)));
  qp.style.setProperty('--q',q+'px');
  $('#qpN').style.gridTemplateColumns=`repeat(3,${q}px)`;$('#qpN').style.gridAutoRows=q+'px';
  qpUpdate();$('#qpBack').classList.add('on');qp.classList.add('on');
  // 置き場所:マスの上 → 下 → 右 → 左 の順に、画面に収まる所(押したマスは隠さない)
  const w=qp.offsetWidth,h=qp.offsetHeight,vw=innerWidth,vh=innerHeight,m=8,cx=(r.left+r.right)/2,cy=(r.top+r.bottom)/2;
  const cx0=x=>Math.max(m,Math.min(vw-w-m,x)),cy0=y=>Math.max(m,Math.min(vh-h-m,y));
  const cand=[[cx0(cx-w/2),r.top-h-m],[cx0(cx-w/2),r.bottom+m],[r.right+m,cy0(cy-h/2)],[r.left-w-m,cy0(cy-h/2)]];
  const ok=([x,y])=>x>=m&&y>=m&&x+w<=vw-m&&y+h<=vh-m;
  const [x,y]=cand.find(ok)||[cx0(cx-w/2),cy0(r.top-h-m)];
  qp.style.left=x+'px';qp.style.top=y+'px';
  tone(820,0,.08,.06);
}
function qpClose(){qpI=-1;qp.classList.remove('on');$('#qpBack').classList.remove('on');}
function qpPick(d){
  if(qpI<0)return;
  sdSel=qpI;sdInput(d);
  if(!sdPlaying||!sdMemoMode)qpClose();else qpUpdate();
}
$('#qpErase').onclick=()=>{if(qpI<0)return;sdSel=qpI;sdErase();qpClose();};
$('#qpClose').onclick=qpClose;
// 外側を触ったら閉じる(長押しを離したときには閉じない)
$('#qpBack').addEventListener('pointerdown',e=>{e.preventDefault();qpClose();});
for(let d=1;d<=9;d++){const b=mk('button','nb',d);b.onclick=()=>sdInput(d);sdNumBtns.push(b);$('#sdNums').appendChild(b);}

function sdLayout(){
  const A=$('#sdArea'),W=A.clientWidth,H=A.clientHeight,land=W>=H,nums=$('#sdNums'),pad=$('#sdPad');
  if(!W||!H)return;
  A.classList.toggle('pt',!land);
  let side,b,bh;
  if(land){
    const pw=Math.round(Math.min(380,Math.max(250,W*0.3)));
    side=Math.min(H-36-10,W-pw-28-36-10);
    b=Math.floor(Math.min(110,(pw-24)/3));bh=b;
    nums.style.gap='12px';nums.style.gridTemplateColumns=`repeat(3,${b}px)`;nums.style.gridAutoRows=bh+'px';
    pad.style.width=(b*3+24)+'px';
  }else{
    const pw=Math.min(W-36,820);
    b=Math.floor(Math.min(96,(pw-8*8)/9));bh=Math.max(64,b);
    side=Math.min(W-36-10,H-36-18-bh-12-76-10);
    nums.style.gap='8px';nums.style.gridTemplateColumns=`repeat(9,${b}px)`;nums.style.gridAutoRows=bh+'px';
    pad.style.width=(b*9+64)+'px';
  }
  side=Math.max(180,Math.floor(side/9)*9);
  sdBoard.style.width=side+'px';sdBoard.style.height=side+'px';
  sdBoard.style.setProperty('--c',(side/9)+'px');pad.style.setProperty('--b',Math.min(b,bh)+'px');
}
const sdLocked=i=>!!(sd.giv[i]||sd.hint[i]);
// 3×3の状態:full=9マス埋まっている、ok=全部正しい
function sdBlocks(){
  const full=Array(9).fill(true),ok=Array(9).fill(true);
  for(let i=0;i<81;i++){const b=sdB(i);if(!sd.cur[i])full[b]=false;if(sd.cur[i]!==sd.sol[i])ok[b]=false;}
  return {full,ok};
}
// 絵を見せている3×3:「絵を見る」で見せた(rv)うえで、今も全部正しいもの(あとで数字を変えたら隠す)
const sdShown=(bl,b)=>!!(sd.rv&(1<<b))&&bl.ok[b];
function sdDraw(){
  if(!sd)return;
  const sv=sdSel>=0?sd.cur[sdSel]:0,cnt=Array(10).fill(0),bl=sdBlocks();
  sd.cur.forEach(v=>cnt[v]++);
  for(let i=0;i<81;i++){
    const C=sdCells[i],el=C.el,v=sd.cur[i];
    el.classList.toggle('rv',sdShown(bl,sdB(i)));
    const peer=sdSel>=0&&i!==sdSel&&(sdR(i)===sdR(sdSel)||sdC(i)===sdC(sdSel)||sdB(i)===sdB(sdSel));
    el.classList.toggle('giv',!!sd.giv[i]);
    el.classList.toggle('hn',!!sd.hint[i]);
    el.classList.toggle('wrong',sdOpt.err&&!!v&&v!==sd.sol[i]);
    el.classList.toggle('sel',i===sdSel);
    el.classList.toggle('peer',peer);
    el.classList.toggle('same',sdOpt.same&&!!sv&&v===sv&&i!==sdSel);
    C.v.textContent=v?String(v):'';
    C.mm.style.display=v?'none':'';
    if(!v)for(let d=1;d<=9;d++){const on=!!(sd.memo[i]&(1<<d)),s=C.ms[d-1];s.textContent=on?String(d):'';s.classList.toggle('hl',on&&sdOpt.same&&sv===d);}
  }
  sdNumBtns.forEach((b,k)=>b.classList.toggle('full',cnt[k+1]>=9));
  $('#sdLeft').textContent=cnt[0];
  $('#sdUndoBtn').classList.toggle('off',!sdUndo.length);
  // 「絵を見る」は、まだ見せていない埋まった3×3があるときだけ濃く
  $('#sdPicBtn').classList.toggle('off',!bl.full.some((f,b)=>f&&!sdShown(bl,b)));
}
// 「🐱 絵を見る」:9マス埋まった3×3のうち、正しいものだけ絵を見せる(間違っているものは出さない。どこが違うかは言わない)
function sdShowPic(){
  ensureAudio();
  if(!sdPlaying||!sd)return;
  const bl=sdBlocks();let any=false,got=false;
  for(let b=0;b<9;b++){if(!bl.full[b]||sdShown(bl,b))continue;any=true;if(bl.ok[b]){sd.rv|=1<<b;got=true;}}
  if(got){[784,988,1175].forEach((f,i)=>tone(f,i*.1,.3,.1));sdDraw();sdSave();}
  else toast(any?'sdPicNo':'sdPicNone',2400);
}
function sdPush(){sdUndo.push({cur:sd.cur.slice(),memo:sd.memo.slice(),hint:sd.hint.slice(),sel:sdSel});if(sdUndo.length>300)sdUndo.shift();}
function sdPlace(i,d){sd.cur[i]=d;sd.memo[i]=0;for(const p of SD_PEERS[i])sd.memo[p]&=~(1<<d);}
function sdInput(d){
  ensureAudio();
  if(!sdPlaying||sdSel<0||sdLocked(sdSel))return;
  const i=sdSel;
  if(sdMemoMode){
    if(sd.cur[i])return;
    sdPush();sd.memo[i]^=1<<d;tone(990,0,.06,.05);
  }else{
    if(sd.cur[i]===d)return;
    sdPush();sdPlace(i,d);tone(700,0,.09,.08);
  }
  sdDraw();sdSave();sdCheck();
}
function sdErase(){
  if(!sdPlaying||sdSel<0||sdLocked(sdSel))return;
  const i=sdSel;if(!sd.cur[i]&&!sd.memo[i])return;
  sdPush();if(sd.cur[i])sd.cur[i]=0;else sd.memo[i]=0;
  sdDraw();sdSave();
}
function sdDoUndo(){
  if(!sdPlaying||!sdUndo.length)return;
  const s=sdUndo.pop();sd.cur=s.cur;sd.memo=s.memo;sd.hint=s.hint;sdSel=s.sel;
  sdDraw();sdSave();
}
function sdFlash(i){const el=sdCells[i].el;el.classList.remove('flash');void el.offsetWidth;el.classList.add('flash');setTimeout(()=>el.classList.remove('flash'),2200);}
function sdHint(){
  if(!sdPlaying)return;
  let i=-1;
  if(sdSel>=0&&sd.cur[sdSel]!==sd.sol[sdSel])i=sdSel;
  if(i<0){ // 入れやすいマス(候補が少ないマス)を選ぶ
    const known=sd.cur.map((v,k)=>v===sd.sol[k]?v:0);let best=[],bc=10;
    for(let k=0;k<81;k++)if(!known[k]){const n=bitCnt(sdCand(known,k));if(n<bc){bc=n;best=[k];}else if(n===bc)best.push(k);}
    if(!best.length)return;
    i=best[Math.floor(Math.random()*best.length)];
  }
  sdPush();sdPlace(i,sd.sol[i]);sd.hint[i]=1;sdSel=i;
  tone(880,0,.2,.1);sdDraw();sdFlash(i);sdSave();sdCheck();
}
function sdCheck(){
  if(sd.cur.some(v=>!v))return;
  if(sd.cur.every((v,i)=>v===sd.sol[i]))sdFinish();
  else toast('sdNotYet',2600);
}
function sdTick(){$('#sdTime').textContent=fmt(Math.floor(sdElapsed()));}
function sdPause(){if(sd&&sdT0){sd.el=sdElapsed();sdT0=0;}clearInterval(sdTimer);sdSave();}
function sdResume(){sdT0=Date.now();clearInterval(sdTimer);let n=0;sdTimer=setInterval(()=>{sdTick();if(++n%10===0)sdSave();},1000);sdTick();}
function sdBegin(){
  sdUndo=[];sdMemoMode=false;$('#sdPad').classList.remove('memo');setTg($('#sdMemoBtn'),false);
  sdSel=sd.cur.findIndex(v=>!v);sdPlaying=true;sdLastSec=null;
  sdLayout();sdDraw();sdResume();sdSave();
}
function sdNew(lv){
  qpClose();lpCancel();
  const pk=sdPick(),item=pk.item;sdSetPic(item);
  sdPlaying=false;clearInterval(sdTimer);sdT0=0;sd=null;sdClearSave();
  sdCells.forEach(C=>{C.el.className=C.el.className.replace(/\b(giv|hn|wrong|sel|peer|same|flash|rv)\b/g,'').trim();C.v.textContent='';C.mm.style.display='none';});
  $('#sdLeft').textContent='81';$('#sdTime').textContent='0:00';
  show('sdPlay');requestAnimationFrame(sdLayout);toast('sdMaking');
  setTimeout(()=>{
    const p=sdMake(lv);
    sd={lv,giv:p.g.slice(),sol:p.sol,cur:p.g.slice(),memo:Array(81).fill(0),hint:Array(81).fill(0),el:0,rv:0,nw:pk.nw};
    sdPicRec(item);
    hideToast();
    if($('#sdPlay').classList.contains('on'))sdBegin();else{sdSave();sdRenderStart();}
  },60);
}
// 続きから:保存した絵の記録を読む(なければ最初のイラスト)
async function sdContinue(){
  const s=sdLoad();if(!s){renderSdCont();return;}
  let item=images[0];
  if(s.img){const im=await jgQueue(()=>idbGet('sudoku-img'));if(im&&im!==IDB_ERR&&im.id===s.img&&imRecOk(im))item=itemFromRec(im);}
  sd=s;sdSetPic(item);show('sdPlay');requestAnimationFrame(()=>sdBegin());
}
function sdFinish(){
  qpClose();lpCancel();
  sdPlaying=false;const sec=Math.floor(sdElapsed());sdT0=0;clearInterval(sdTimer);
  sdClearSave();recordPlay('sudoku');sdNewNo=apvUnlockNo(sd.nw);sdRecordClear(sec);
  sd.rv=511;sdSel=-1;sdDraw();sndDone();
  if(sdDoneRec&&sdDoneRec.newRec)[1047,1319,1568,2093].forEach((f,i)=>tone(f,1.0+i*.12,.5,.14));
  sdLastSec=sec;$('#sdDoneMsg').textContent=doneText(sec);sdRenderDone();
  $('#sdGift').style.display='none';sdNewCatPaint();
  if(sdNewNo)[784,988,1175].forEach((f,i)=>tone(f,1.6+i*.14,.35,.12));
  donePrep(sdItem,'#sdSave');
  setTimeout(()=>$('#sdDoneOv').classList.add('on'),900);
}
// クリアで出た新しい猫の知らせ
let sdNewNo=0;
function sdNewCatPaint(){const e=$('#sdNewCat');e.style.display=sdNewNo?'':'none';e.textContent=sdNewNo?t('sdNewCat')+(kana?'('+sdNewNo+'ばん)':'('+sdNewNo+'番)'):'';}
// 最初の画面の数独の「続きから」(絵の小さな画像つき。新しい猫のときは「?」にして中身を見せない)
let sdThumbUrl=null,sdContGen=0;
async function renderSdCont(){
  const gen=++sdContGen,sv=sdLoad(),cb=$('#sdCont');
  let src=images[0].url,im=null;
  if(sv&&sv.img){im=await jgQueue(()=>idbGet('sudoku-img'));if(gen!==sdContGen)return;}
  if(sdThumbUrl){URL.revokeObjectURL(sdThumbUrl);sdThumbUrl=null;}
  if(!sv){cb.style.display='none';cb.replaceChildren();renderMenuNew();return;}
  if(im&&im!==IDB_ERR&&im.id===sv.img&&imRecOk(im)){if(im.kind==='sample')src=images[im.idx].url;else{sdThumbUrl=URL.createObjectURL(im.blob);src=sdThumbUrl;}}
  let pic;if(sv.nw)pic=mk('span','qm','?');else{pic=mk('img');pic.alt='';pic.src=safeImgUrl(src);}
  const tx=mk('span','ctx');tx.append(mk('span','ct',t('sdCont')),mk('small',null,'🔢 '+t('gSd')+' ・ '+t('s'+sv.lv)+' ・ ⏱ '+fmt(Math.floor(sv.el))));
  cb.replaceChildren(pic,tx);cb.style.display='';renderMenuNew();
}
function sdRenderStart(){
  const box=$('#sdLvs');box.replaceChildren();
  [0,1,2,3].forEach(k=>{
    const b=document.createElement('button');b.className='cnt'+(k===sdSelLv?' sel':'');
    b.append(document.createTextNode(t('s'+k)),mk('small',null,t('s'+k+'d')));
    b.onclick=()=>{sdSelLv=k;sdSaveOpt();sdRenderStart();};
    box.appendChild(b);
  });
  sdRenderRecs();renderSdCard();
}
function sdApplyLang(){
  sdRenderStart();renderSdCont();
  if(sdLastSec!=null)$('#sdDoneMsg').textContent=doneText(sdLastSec);
  setTg($('#sdMemoBtn'),sdMemoMode);
  sdRenderDone();sdNewCatPaint();
}
$('#sdCont').onclick=()=>{ensureAudio();sdContinue();};
$('#sdGo').onclick=()=>{ensureAudio();if(sdMode()==='wait'){toast('catLoading',2600);return;}if(sdLoad()){sdPending=null;$('#sdNewOv').classList.add('on');}else sdNew(sdSelLv);};
$('#sdPicBtn').onclick=sdShowPic;
$('#sdNewOv').onclick=e=>{if(e.target.id==='sdNewOv'){sdPending=null;$('#sdNewOv').classList.remove('on');}};
$('#sdNewNo').onclick=()=>{sdPending=null;$('#sdNewOv').classList.remove('on');sdContinue();};
$('#sdNewYes').onclick=()=>{$('#sdNewOv').classList.remove('on');const f=sdPending;sdPending=null;if(f)f();else sdNew(sdSelLv);};
$('#sdRetryBtn').onclick=()=>{$('#sdDoneOv').classList.remove('on');if(sdDoneRec)sdPlayRec(sdDoneRec.id);};
$('#sdFavBtn').onclick=()=>{if(sdDoneRec&&sdToggleFav(sdDoneRec.id))sdRenderDone();};
// 戻る:途中は自動で保存されるので、確認なしで戻る(次は「続きから」で再開)
$('#sdBackBtn').onclick=()=>{qpClose();lpCancel();if(sdPlaying)sdPause();sdPlaying=false;hideToast();show('menu');renderSdCont();};
$('#sdHintBtn').onclick=sdHint;
$('#sdEraseBtn').onclick=sdErase;
$('#sdUndoBtn').onclick=sdDoUndo;
$('#sdMemoBtn').onclick=e=>{sdMemoMode=!sdMemoMode;setTg(e.currentTarget,sdMemoMode);$('#sdPad').classList.toggle('memo',sdMemoMode);};
$('#sdSetBtn').onclick=()=>{setTg($('#sdErrBtn'),sdOpt.err);setTg($('#sdSameBtn'),sdOpt.same);setTg($('#sdSoundBtn'),soundOn);$('#sdSetOv').classList.add('on');};
$('#sdSetClose').onclick=()=>$('#sdSetOv').classList.remove('on');
$('#sdErrBtn').onclick=e=>{sdOpt.err=!sdOpt.err;setTg(e.currentTarget,sdOpt.err);sdSaveOpt();sdDraw();};
$('#sdSameBtn').onclick=e=>{sdOpt.same=!sdOpt.same;setTg(e.currentTarget,sdOpt.same);sdSaveOpt();sdDraw();};
$('#sdSoundBtn').onclick=e=>{soundOn=!soundOn;ensureAudio();setTg(e.currentTarget,soundOn);};
$('#sdAgainBtn').onclick=()=>{$('#sdDoneOv').classList.remove('on');sdNew(sd?sd.lv:sdSelLv);};
$('#sdOtherBtn').onclick=()=>{$('#sdDoneOv').classList.remove('on');sdRenderStart();show('sdStart');};
// 画面を離れたら時間を止めて保存する
document.addEventListener('visibilitychange',()=>{
  if(!sdPlaying)return;
  if(document.hidden)sdPause();
  else if($('#sdPlay').classList.contains('on'))sdResume();
});
window.addEventListener('pagehide',()=>{if(sdPlaying)sdSave();});
window.SD_READY=true;
sdApplyLang();
// 起動時:猫の写真・ごほうびの絵を読み、ジグソーの「続きから」を出す。
// 保存データを消されにくくするよう頼む(できる端末だけ)。開いた直後は保存場所が開けないことがあるので少し待つ
try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist().catch(()=>{});}catch(e){}
setTimeout(()=>{initCats();albLoad();renderJgCont();renderSdCont();},300);
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&Date.now()-apvLast>30*60e3&&!playing&&!sdPlaying)initCats();});

/* ====== 管理用の設定(メニューの版番号を3秒長押しで開く) ====== */
// キーは画面・ログに出さない(入力欄は伏せ字、設定済みかどうかだけ表示)
let admLp=null;
const menuVer=$('#menuVer');
function admLpCancel(){if(admLp){clearTimeout(admLp.tm);admLp=null;}}
menuVer.addEventListener('pointerdown',e=>{
  admLpCancel();
  admLp={id:e.pointerId,x:e.clientX,y:e.clientY,tm:setTimeout(()=>{admLp=null;admAsk();},3000)};
});
menuVer.addEventListener('pointermove',e=>{if(admLp&&e.pointerId===admLp.id&&Math.hypot(e.clientX-admLp.x,e.clientY-admLp.y)>12)admLpCancel();});
menuVer.addEventListener('pointerup',admLpCancel);
menuVer.addEventListener('pointercancel',admLpCancel);
menuVer.addEventListener('pointerleave',admLpCancel);
menuVer.addEventListener('contextmenu',e=>e.preventDefault());
function admRender(msgKey){
  $('#admSt').textContent=catKey()?t('admSet'):t('admUnset');
  $('#admMsg').textContent=msgKey?t(msgKey):'';
  const k=kana?'まい':'枚';
  $('#admSrc').textContent=t('admApvSt')+':'+(kana?'いちらん ':'一覧')+apvStat.list+k+(kana?'・ほぞん ':'・保存')+apvPool.length+k+(kana?'・みられる ':'・見られる')+catItems.length+k+(kana?'・のこり ':'・残り')+apvRest().length+k
    +(apvStat.bad?(kana?'・しもんが あわない ':'・指紋が合わない')+apvStat.bad+k:'')+(apvStat.err?' ('+apvStat.err+')':'');
  $('#admLimV').textContent=catLimit()+k;
  $('#admUsed').textContent=t('admUsed')+':'+catUsed()+k;
  $('#admDb').textContent=t('admDb')+':'+(idbDiag.ok?t('admDbOk'):t('admDbNg'))+(idbDiag.fails?(kana?'(ひらけなかった かいすう '+idbDiag.fails+' '+idbDiag.last+')':'(開けなかった回数 '+idbDiag.fails+' '+idbDiag.last+')'):'')
    +' ・ '+(kana?'ごほうび '+albItems.length+'まい':'ごほうび'+albItems.length+'枚')+(apvNoSave?(kana?'・しゃしんは ほぞん していません':'・写真は保存していません'):'');
  setTg($('#admTest'),testOn());
  if(Date.now()-admInitAt>4000)$('#admInit').textContent=t('admInit');
}
// 長押しのあと、確認してから開く(「開かない」を大きく、「開く」は下に離して小さく。外側タップは閉じる)
function admAsk(){ensureAudio();tone(660,0,.15,.08);$('#admAskOv').classList.add('on');}
$('#admAskOv').onclick=e=>{if(e.target.id==='admAskOv')$('#admAskOv').classList.remove('on');};
$('#admAskNo').onclick=()=>$('#admAskOv').classList.remove('on');
$('#admAskYes').onclick=()=>{$('#admAskOv').classList.remove('on');admOpen();};
function admOpen(){admInitAt=0;$('#admKey').value='';admRender('');$('#admOv').classList.add('on');}
function admAfterChange(){renderCatPics();}
function admSetLimit(d){
  const n=Math.max(0,Math.min(CAT_LIMIT_MAX,catLimit()+d));
  try{localStorage.setItem(CAT_LIMIT_KEY,String(n));}catch(e){}
  admRender('');renderCatPics();
}
$('#admLimDn').onclick=()=>admSetLimit(-1);
$('#admLimUp').onclick=()=>admSetLimit(1);
$('#admReset').onclick=()=>{catUseReset();admRender('');renderCatPics();};
// テスト用:出た猫を最初の6枚に・今日の数を0に・消した写真を元に戻す(2回押す)
let admInitAt=0;
$('#admInit').onclick=()=>{
  if(Date.now()-admInitAt>4000){admInitAt=Date.now();$('#admInit').textContent=t('admInit2');return;}
  admInitAt=0;
  try{[APV_OPEN_KEY,APV_NEW_KEY,CAT_QUOTA_KEY,CAT_NG_KEY].forEach(k=>localStorage.removeItem(k));}catch(e){}
  selApi=-1;apvRebuild();apvTopUp();renderAllPics();renderSel();admRender('admInitDone');
};
$('#admSave').onclick=()=>{
  const v=String($('#admKey').value||'').trim();
  if(!CAT_KEY_RE.test(v)){admRender('admBad');return;}
  try{localStorage.setItem(CAT_KEY,v);}catch(e){}
  $('#admKey').value='';admAfterChange();admRender('admSaved');
};
$('#admDel').onclick=()=>{try{localStorage.removeItem(CAT_KEY);}catch(e){}$('#admKey').value='';admAfterChange();admRender('admDeleted');};
$('#admClose').onclick=()=>{$('#admKey').value='';$('#admKey').blur();$('#admOv').classList.remove('on');};
// テスト用のボタン(数独の「答えを埋める」・ジグソーの「全部はめる」)。この端末だけ
const TEST_KEY='neko-test';
function testOn(){try{return localStorage.getItem(TEST_KEY)==='1';}catch(e){return false;}}
function renderTest(){const on=testOn();$('#sdTestFill').style.display=on?'':'none';$('#jgTestFill').style.display=on?'':'none';}
$('#admTest').onclick=()=>{try{if(testOn())localStorage.removeItem(TEST_KEY);else localStorage.setItem(TEST_KEY,'1');}catch(e){}renderTest();admRender('');};
$('#sdTestFill').onclick=()=>{
  $('#sdSetOv').classList.remove('on');
  if(!sdPlaying||!sd)return;
  sdPush();for(let i=0;i<81;i++)if(!sd.giv[i]&&!sd.hint[i]){sd.cur[i]=sd.sol[i];sd.memo[i]=0;}
  sdDraw();sdSave();sdCheck();
};
$('#jgTestFill').onclick=()=>{
  $('#setOv').classList.remove('on');
  if(!playing||drag)return;
  trayList=[];
  pieces.filter(p=>p.where!=='lock').forEach(p=>{if(p.where==='tray'||p.el.parentNode!==area)area.appendChild(p.el);p.el.style.display='';lockPiece(p);});
};
renderTest();

/* ====== 許可リストの管理(管理者のiPhoneで使う) ====== */
// 候補を探し、確認して「許可」した写真と「外す」写真を下書きに残す。「一覧をコピー」で approved.json の中身を作り、
// Claude のチャットに貼り付けてもらってリポジトリに反映する(この画面からGitHubには書き込まない。トークン不要)
const ADM_DRAFT_KEY='neko-adm-draft';
let apvAdmList=null,apvCands=[],apvFinding=false;
function admDraft(){
  try{const o=JSON.parse(localStorage.getItem(ADM_DRAFT_KEY)||'null');
    if(!o||o.v!==1)return {add:[],rm:[]};
    const add=Array.isArray(o.add)?o.add.filter(e=>e&&catOkUrl(e.u)&&typeof e.h==='string'&&HASH_RE.test(e.h)).slice(0,APV_ADM_MAX):[];
    const rm=Array.isArray(o.rm)?o.rm.filter(n=>Number.isInteger(n)&&n>0&&n<=99999):[];
    return {add,rm};
  }catch(e){return {add:[],rm:[]};}
}
function admDraftSave(d){try{localStorage.setItem(ADM_DRAFT_KEY,JSON.stringify({v:1,add:d.add,rm:d.rm}));}catch(e){}}
// 公開中の一覧に反映済みのものは下書きから外す
function admDraftClean(){
  if(!apvAdmList)return admDraft();
  const d=admDraft(),us=new Set(apvAdmList.list.map(e=>e.u)),nos=new Set(apvAdmList.list.map(e=>e.no));
  d.add=d.add.filter(e=>!us.has(e.u));d.rm=d.rm.filter(n=>nos.has(n));
  admDraftSave(d);return d;
}
function apvTotal(d){return (apvAdmList?apvAdmList.list.length:0)-d.rm.length+d.add.length;}
// 上限を超えたら、古い写真(番号の小さい順)から「外す」に入れる
function apvAutoRm(d){
  if(!apvAdmList)return;
  const sorted=apvAdmList.list.map(e=>e.no).sort((a,b)=>a-b);
  for(const n of sorted){if(apvTotal(d)<=APV_ADM_MAX)break;if(!d.rm.includes(n))d.rm.push(n);}
}
function apvTile(src,label,on,badge,onTap){
  const b=document.createElement('button');b.className='pic apvT'+(on?' on':'');
  const im=mk('img');im.alt='';im.src=safeImgUrl(src);
  const q=mk('div','qt');b.append(im,q);qBind(im,q,true,true,true);
  if(label)b.appendChild(mk('span','pno',label));
  if(on)b.appendChild(mk('span','apvB',badge));
  b.onclick=onTap;return b;
}
// 拡大表示で見る写真の並び(公開中 → 候補。画面の並びと同じ)
let apvZ=[],apvZi=-1;
function apvRender(){
  const d=admDraftClean(),cur=$('#apvCur'),cand=$('#apvCand');cur.replaceChildren();cand.replaceChildren();
  const zk=apvZi>=0&&apvZ[apvZi]?apvZ[apvZi].kind+'|'+apvZ[apvZi].u:'';apvZ=[];
  const add=z=>{const i=apvZ.length;apvZ.push(z);return ()=>apvZOpen(i);};
  const k=kana?'まい':'枚';
  $('#apvSt').textContent=apvAdmList?(kana?'こうかいちゅう ':'公開中 ')+apvAdmList.list.length+k+(kana?'(つぎの ばんごう ':'(次の番号 ')+apvAdmList.next+')':(kana?'いちらんを よみこめませんでした':'一覧を読み込めませんでした');
  if(apvAdmList)apvAdmList.list.slice().sort((a,b)=>b.no-a.no).forEach(e=>{
    const on=d.rm.includes(e.no);
    cur.appendChild(apvTile(e.u,String(e.no),on,t('apvRm'),add({kind:'cur',u:e.u,src:e.u,no:e.no,on})));
  });
  // 前に許可した候補(下書きにあり、今回の候補にないもの)+今回見つけた候補(見つけた順。許可しても並びは変えない)
  const found=new Set(apvCands.map(c=>c.u)),ok=new Set(d.add.map(e=>e.u));
  d.add.filter(e=>!found.has(e.u)).forEach(e=>cand.appendChild(apvTile(e.u,'',true,t('apvOk'),add({kind:'cand',u:e.u,src:e.u,h:e.h,on:true}))));
  apvCands.forEach(c=>{const on=ok.has(c.u);cand.appendChild(apvTile(c.url,'',on,t('apvOk'),add({kind:'cand',u:c.u,src:c.url,h:c.h,on})));});
  apvOrdRender(d);
  if(apvZi>=0){const i=apvZ.findIndex(z=>z.kind+'|'+z.u===zk);if(i>=0){apvZi=i;apvZPaint();}else apvZClose();}
  const tot=apvTotal(d),over=tot-APV_ADM_MAX;
  $('#apvSum').textContent=(kana?'いま ':'今 ')+(apvAdmList?apvAdmList.list.length:0)+k+' − '+t('apvRm')+' '+d.rm.length+k+' + '+t('apvOk')+' '+d.add.length+k+' = '+tot+k+(kana?'(じょうげん ':'(上限 ')+APV_ADM_MAX+k+')'
    +(over>0?(kana?' あと '+over+'まい はずしてください':' あと'+over+'枚外してください'):'');
  $('#apvSum').classList.toggle('ng',over>0);
  $('#apvCopy').disabled=!apvAdmList||over>0||(!d.add.length&&!d.rm.length);
  $('#apvFind').disabled=apvFinding;
  $('#apvFind').textContent=apvFinding?t('apvFinding'):t('apvFind');
}
// 許可する写真の順番(コピーするとき、この順に新しい番号が付く=ご家族に出る順)。▲▼で1つずつ動かす
function apvOrdRender(d){
  const box=$('#apvOrd');box.replaceChildren();
  $('#apvOrdH').style.display=d.add.length?'':'none';
  const next=apvAdmList?apvAdmList.next:0;
  d.add.forEach((e,i)=>{
    const c=apvCands.find(x=>x.u===e.u),row=mk('div','apvO');
    const th=document.createElement('button');th.className='apvOT';
    const im=mk('img');im.alt='';im.src=safeImgUrl(c?c.url:e.u);th.appendChild(im);
    th.onclick=()=>{const k=apvZ.findIndex(z=>z.kind==='cand'&&z.u===e.u);if(k>=0)apvZOpen(k);};
    const lb=mk('span','apvON',next?(kana?next+i+'ばん':(next+i)+'番'):String(i+1));
    const up=mk('button','tb','▲'),dn=mk('button','tb','▼');
    up.disabled=i===0;dn.disabled=i===d.add.length-1;
    up.onclick=()=>apvOrdMove(i,-1);dn.onclick=()=>apvOrdMove(i,1);
    row.append(th,lb,up,dn);box.appendChild(row);
  });
}
function apvOrdMove(i,dd){
  const x=admDraft(),j=i+dd;if(j<0||j>=x.add.length)return;
  [x.add[i],x.add[j]]=[x.add[j],x.add[i]];admDraftSave(x);apvRender();
}
// 拡大表示:写真全体(切り取らない)を大きく出し、中で「許可する/外す」を決める。◀▶・左右スワイプで前後の写真へ
function apvZOpen(i){apvZi=i;apvZPaint();$('#apvZOv').classList.add('on');}
function apvZClose(){apvZi=-1;$('#apvZOv').classList.remove('on');$('#apvZImg').removeAttribute('src');}
function apvZPaint(){
  const z=apvZ[apvZi];if(!z){apvZClose();return;}
  const im=$('#apvZImg'),u=safeImgUrl(z.src);if(im.getAttribute('src')!==u)im.src=u;
  qBind(im,$('#apvZQ'),true,true,false);
  const cur=z.kind==='cur',nc=apvZ.filter(x=>x.kind===z.kind),pos=nc.indexOf(z)+1;
  $('#apvZH').textContent=(cur?z.no+t('apvZCur'):t('apvZCand'))+' '+pos+' / '+nc.length;
  const s=$('#apvZS');s.textContent=t(cur?(z.on?'apvZRmOn':'apvZRmOff'):(z.on?'apvZOkOn':'apvZOkOff'));s.classList.toggle('on',z.on);
  const b=$('#apvZTg');b.textContent=t(cur?(z.on?'apvZRmNo':'apvZRm'):(z.on?'apvZOkNo':'apvZOk'));
  b.className='bb '+(!cur&&!z.on?'p':'s')+(cur&&!z.on?' del':'');
  $('#apvZPrev').disabled=apvZi<=0;$('#apvZNext').disabled=apvZi>=apvZ.length-1;
}
function apvZToggle(){
  const z=apvZ[apvZi];if(!z)return;const x=admDraft();
  if(z.kind==='cur')x.rm=x.rm.includes(z.no)?x.rm.filter(n=>n!==z.no):x.rm.concat(z.no);
  else if(x.add.some(y=>y.u===z.u))x.add=x.add.filter(y=>y.u!==z.u);
  else{x.add.push({u:z.u,h:z.h});apvAutoRm(x);}
  admDraftSave(x);apvRender();
}
function apvZGo(d){const i=apvZi+d;if(i>=0&&i<apvZ.length){apvZi=i;apvZPaint();}}
$('#apvZTg').onclick=apvZToggle;
$('#apvZPrev').onclick=()=>apvZGo(-1);
$('#apvZNext').onclick=()=>apvZGo(1);
$('#apvZClose').onclick=apvZClose;
$('#apvZOv').onclick=e=>{if(e.target.id==='apvZOv')apvZClose();};
{let sw=null;const w=$('#apvZW');
  $('#apvZImg').draggable=false;w.addEventListener('dragstart',e=>e.preventDefault());
  w.addEventListener('pointerdown',e=>{sw={x:e.clientX,y:e.clientY};});
  w.addEventListener('pointerup',e=>{if(!sw)return;const dx=e.clientX-sw.x,dy=e.clientY-sw.y;sw=null;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5)apvZGo(dx<0?1:-1);});
  w.addEventListener('pointercancel',()=>{sw=null;});}
async function apvAdmOpen(){
  $('#admOv').classList.remove('on');$('#apvOv').classList.add('on');
  $('#apvOut').value='';$('#apvOut').style.display='none';$('#apvCopyMsg').textContent='';
  apvRender();
  try{apvAdmList=await apvFetchList();}catch(e){apvAdmList=null;}
  apvRender();
}
// 候補を探す:取得元からアドレスをもらい、持ち出し許可つきで2回読んで中身が同じ写真だけを候補にする
// 候補探しの途中経過(段階・件数・経過時間・棒)
let apvFP=null,apvFTm=0;
function apvFTime(sec){const m=Math.floor(sec/60),s=sec%60;return kana?(m?m+'ふん ':'')+s+'びょう':(m?m+'分'+String(s).padStart(2,'0')+'秒':s+'秒');}
function apvFPaint(){
  const P=apvFP,msg=$('#apvFindMsg'),bar=$('#apvBar');if(!P)return;
  const sec=Math.floor((Date.now()-P.t0)/1000),un=kana?'まい':'枚';
  let s,r;
  if(P.ph===1){s=t('apvP1')+' '+P.done+' / '+P.total;r=P.total?0.15*P.done/P.total:0;}
  else{s=t('apvP2')+' '+P.done+' / '+P.total+un+'('+t('apvPFound')+' '+P.ok+un+')';r=0.15+0.85*(P.total?P.done/P.total:1);}
  msg.textContent=s+' ・ ⏱ '+apvFTime(sec)+'\n'+t('apvPWait');
  msg.classList.add('apvFindOn');msg.style.whiteSpace='pre-line';
  bar.hidden=false;$('#apvBarIn').style.width=Math.round(Math.min(1,r)*100)+'%';
}
async function apvFind(){
  if(apvFinding)return;
  apvFinding=true;apvRender();
  const d=admDraft(),skip=new Set(catNg());
  if(apvAdmList)apvAdmList.list.forEach(e=>skip.add(e.u));
  d.add.forEach(e=>skip.add(e.u));apvCands.forEach(c=>skip.add(c.u));
  let urls=[];
  const k=catKey(),nc=k?6:12;
  const P=apvFP={ph:1,done:0,total:nc+(k?1:0),ok:0,t0:Date.now()};
  const tick=pr=>pr.finally(()=>{P.done++;apvFPaint();});
  apvFPaint();clearInterval(apvFTm);apvFTm=setInterval(apvFPaint,1000);
  const tca=k?tick(fetchJson('https://api.thecatapi.com/v1/images/search?limit=10&mime_types=jpg,png',{headers:{'x-api-key':k}},10000)).then(a=>{
    if(Array.isArray(a))urls=urls.concat(a.map(o=>o&&typeof o.url==='string'&&TCA_IMG_RE.test(o.url)?o.url:'').filter(Boolean));}).catch(()=>{}):Promise.resolve();
  const rs=await Promise.allSettled(Array.from({length:nc},(_,i)=>tick(fetchJson('https://cataas.com/cat?json=true&_='+Date.now().toString(36)+i,null,10000))));
  await tca;
  rs.forEach(r=>{if(r.status!=='fulfilled'||!r.value||typeof r.value!=='object')return;const o=r.value,id=typeof o.id==='string'?o.id:(typeof o._id==='string'?o._id:'');if(CATAAS_ID_RE.test(id))urls.push('https://cataas.com/cat/'+id);});
  urls=[...new Set(urls)].filter(u=>!skip.has(u));
  let ok=0,ng=0,i=0;
  P.ph=2;P.done=0;P.total=urls.length;apvFPaint();
  const work=async()=>{
    while(i<urls.length){
      const u=urls[i++];
      try{
        const a=await fetchBytes(u),b=await fetchBytes(u,20000,'reload');
        const h=await sha256(a.buf);
        if(h!==await sha256(b.buf))throw new Error('changed');
        const url=URL.createObjectURL(new Blob([a.buf],{type:a.type}));
        try{await loadCatImg(url);}catch(e){URL.revokeObjectURL(url);throw e;}
        apvCands.push({u,h,url});ok++;P.ok=ok;apvRender();
      }catch(e){ng++;}
      P.done++;apvFPaint();
    }
  };
  await Promise.all([work(),work(),work()]);
  clearInterval(apvFTm);apvFP=null;
  const sec=Math.floor((Date.now()-P.t0)/1000);
  apvFinding=false;
  const msg=$('#apvFindMsg');msg.classList.remove('apvFindOn');msg.style.whiteSpace='';$('#apvBar').hidden=true;
  msg.textContent=(kana?ok+'まい みつかりました':ok+'枚見つかりました')+'(⏱ '+apvFTime(sec)+')'+(ng?(kana?'(もちだせない・なかみが かわる しゃしん '+ng+'まいは のぞきました)':'(持ち出せない・中身が変わる写真'+ng+'枚は除きました)'):'');
  apvRender();
}
// approved.json の中身を作る(1行1枚)
function apvBuild(){
  const d=admDraftClean();if(!apvAdmList)return '';
  let next=apvAdmList.next;
  const list=apvAdmList.list.filter(e=>!d.rm.includes(e.no)).concat(d.add.map(e=>({no:next++,u:e.u,h:e.h}))).sort((a,b)=>a.no-b.no);
  return '{"v":1,"next":'+next+',"list":[\n'+list.map(e=>JSON.stringify({no:e.no,u:e.u,h:e.h})).join(',\n')+'\n]}\n';
}
$('#admApv').onclick=apvAdmOpen;
$('#apvFind').onclick=apvFind;
$('#apvCopy').onclick=()=>{
  const s=apvBuild();if(!s)return;
  const out=$('#apvOut');out.value=s;out.style.display='';
  const done=ok=>{$('#apvCopyMsg').textContent=t(ok?'apvCopied':'apvCopyNg');};
  try{navigator.clipboard.writeText(s).then(()=>done(true),()=>done(false));}catch(e){done(false);}
};
$('#apvDraftDel').onclick=()=>{try{localStorage.removeItem(ADM_DRAFT_KEY);}catch(e){}$('#apvOut').style.display='none';apvRender();};
$('#apvClose').onclick=()=>{apvZClose();$('#apvOv').classList.remove('on');};

/* ====== 新しい版のお知らせ ====== */
// 同じ場所の version.json を読み、今より新しい版があればメニューの上部に帯を出す。失敗しても何もしない
let updLatest='';
function renderUpd(){
  const bar=$('#updBar');
  if(!updLatest){bar.hidden=true;bar.replaceChildren();return;}
  const tx=mk('div','ut',t('updT'));tx.appendChild(mk('small',null,t('updV')+' v'+updLatest));
  const b=mk('button','bb p',t('updBtn'));
  b.onclick=()=>{location.replace(APP_URL+'?v='+updLatest);};
  bar.replaceChildren(tx,b,mk('p','un',t('updNote')));
  bar.hidden=false;
}
async function checkUpdate(){
  try{
    const r=await fetch('version.json?_='+Date.now(),{cache:'no-store',credentials:'omit'});
    if(!r.ok)return;
    const o=await r.json(),v=o&&typeof o.version==='string'&&/^[0-9]{14}$/.test(o.version)?o.version:'';
    const nv=v&&v>APP_VERSION?v:'';
    if(nv!==updLatest){updLatest=nv;renderUpd();}
  }catch(e){}
}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)checkUpdate();});
window.UPD_READY=true;
checkUpdate();
