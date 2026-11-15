/* ====== 版番号 ====== */
// 上書き公開のたびに、公開時刻(日本時間・年月日時分秒の14桁)へ更新する。
// index.html の app.js?v=… と version.json も同じ値にそろえる
const APP_VERSION='20261115161640';
// 公開ページのURL(新しい版のお知らせの「更新する」で開き直す)
const APP_URL='https://kengoodjob.github.io/neko-puzzle/';
document.querySelectorAll('.ver').forEach(e=>{e.textContent='v'+APP_VERSION;});

/* ====== 文字の表記(0=漢字 / 1=ひらがな) ====== */
// [漢字, ひらがな] の組。画面への反映は必ず textContent で行う
const T={
  lang:['文字','もじ'],
  menuLead:['絵を選んでから、下のボタンで遊ぶパズルを選んでください','えを えらんでから、したの ボタンで あそぶ パズルを えらんでください'],
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
  hPic:['① 絵を選ぶ','① えを えらぶ'],
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
  hCat:['ねこの写真','ねこの しゃしん'],
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
  admLim:['写真の入れ替え(1日)','しゃしんの いれかえ(1にち)'],
  admUsed:['今日の入れ替え','きょうの いれかえ'],
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

/* ====== 猫の写真(インターネットから取得) ====== */
// キーがあるときは The Cat API と cataas を半分ずつ混ぜる(ないときは cataas だけ)。どちらもだめならサンプルのイラストで遊ぶ。
// 返ってきた値は、決めたドメインの https 画像URLだけを使い、他の値は捨てる(画面にも出さない)
// 表示した6枚は iPad 内(IndexedDB 'cats')に写真ごと保存し、次に開いたときも同じ写真を出す。
// 入れ替えは選んだ1枚ずつ。1日の上限あり(日本時間の0時で切り替え。管理用の設定で変更可)
const CAT_N=6,CAT_KEY='neko-catapi-key',CAT_SRC_KEY='neko-cat-src';
const CAT_LIMIT_KEY='neko-cat-limit',CAT_QUOTA_KEY='neko-cat-quota',CAT_LIMIT_DEF=10,CAT_LIMIT_MAX=50;
const CAT_KEY_RE=/^[A-Za-z0-9_-]{8,100}$/;
const TCA_IMG_RE=/^https:\/\/cdn2\.thecatapi\.com\/images\/[A-Za-z0-9_-]{1,40}\.(jpe?g|png)$/i;
const CATAAS_ID_RE=/^[A-Za-z0-9_-]{6,40}$/;
const CATAAS_IMG_RE=/^https:\/\/cataas\.com\/cat\/[A-Za-z0-9_-]{6,40}$/;
let catItems=[],catState='idle',catGen=0,catBusy=-1; // catState: idle / loading / ok / fail、catBusy:入れ替え中の番号
function catKey(){try{const k=localStorage.getItem(CAT_KEY)||'';return CAT_KEY_RE.test(k)?k:'';}catch(e){return '';}}
const jstDay=()=>new Date(Date.now()+9*3600e3).toISOString().slice(0,10);
function catLimit(){
  try{const v=localStorage.getItem(CAT_LIMIT_KEY);if(v===null)return CAT_LIMIT_DEF;const n=Number(v);return Number.isInteger(n)&&n>=0&&n<=CAT_LIMIT_MAX?n:CAT_LIMIT_DEF;}catch(e){return CAT_LIMIT_DEF;}
}
function catUsed(){
  try{const o=JSON.parse(localStorage.getItem(CAT_QUOTA_KEY)||'null');return o&&o.d===jstDay()&&Number.isInteger(o.n)&&o.n>=0&&o.n<10000?o.n:0;}catch(e){return 0;}
}
function catUse(){try{localStorage.setItem(CAT_QUOTA_KEY,JSON.stringify({d:jstDay(),n:catUsed()+1}));}catch(e){}}
const catLeft=()=>Math.max(0,catLimit()-catUsed());
function fetchJson(url,opt,ms){
  const ctl=new AbortController(),tm=setTimeout(()=>ctl.abort(),ms);
  return fetch(url,Object.assign({signal:ctl.signal,cache:'no-store',credentials:'omit',referrerPolicy:'no-referrer',mode:'cors'},opt||{}))
    .then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json();})
    .finally(()=>clearTimeout(tm));
}
async function catFromTheCatApi(n){
  const k=catKey();if(!k)throw new Error('no key');
  // キーはURLに入れず、x-api-key ヘッダーで送る(1回の呼び出しで数枚分の候補をもらう)
  const a=await fetchJson('https://api.thecatapi.com/v1/images/search?limit='+Math.min(10,n+4)+'&mime_types=jpg,png',{headers:{'x-api-key':k}},10000);
  if(!Array.isArray(a))throw new Error('bad');
  return a.map(o=>o&&typeof o.url==='string'&&TCA_IMG_RE.test(o.url)?o.url:'').filter(Boolean);
}
async function catFromCataas(n){
  const rs=await Promise.allSettled(Array.from({length:n},(_,i)=>fetchJson('https://cataas.com/cat?json=true&_='+Date.now().toString(36)+i,null,10000)));
  return rs.map(r=>{
    if(r.status!=='fulfilled'||!r.value||typeof r.value!=='object')return '';
    const o=r.value,id=typeof o.id==='string'?o.id:(typeof o._id==='string'?o._id:'');
    return CATAAS_ID_RE.test(id)?'https://cataas.com/cat/'+id:'';
  }).filter(Boolean);
}
// 画像の読み込み。まず持ち出し許可(CORS)付きで読み、だめなら普通に読む(その場合は写真の保存・途中保存ができない)
function loadCatImg(url){
  const tryLoad=cors=>new Promise((res,rej)=>{
    const img=new Image();let done=false;
    const tm=setTimeout(()=>{if(!done){done=true;img.src='';rej(new Error('timeout'));}},15000);
    img.onload=()=>{if(done)return;done=true;clearTimeout(tm);(img.naturalWidth>=200&&img.naturalHeight>=200)?res(img):rej(new Error('small'));};
    img.onerror=()=>{if(done)return;done=true;clearTimeout(tm);rej(new Error('load'));};
    if(cors)img.crossOrigin='anonymous';
    img.referrerPolicy='no-referrer';
    img.src=url;
  });
  return tryLoad(true).catch(()=>tryLoad(false));
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
async function catMakeItem(src,ou,img){
  const blob=await catToBlob(img);
  return {api:true,src,ou,blob,url:ou,img,ready:Promise.resolve(img)};
}
// 1つの取得元から n枚取る。skip のURLは除く。取れた分だけ返す(失敗は0枚)
async function catFetchFrom(src,n,skip){
  try{
    const get=src==='thecatapi'?catFromTheCatApi:catFromCataas;
    const urls=[...new Set(await get(n))].filter(u=>!skip.has(u)).slice(0,n);
    const rs=await Promise.allSettled(urls.map(u=>loadCatImg(u).then(img=>catMakeItem(src,u,img))));
    return rs.filter(r=>r.status==='fulfilled').map(r=>r.value);
  }catch(e){return [];}
}
// 取得元の割り当て。キーがあるときは、6枚の中で The Cat API と cataas ができるだけ3枚ずつになるように選ぶ
// (items:今ある写真。null は空き枠・入れ替える枠。同じ数のときは交互)。キーがないときは cataas だけ
const CAT_NEXT_KEY='neko-cat-next';
function catNext(){try{return localStorage.getItem(CAT_NEXT_KEY)==='cataas'?'cataas':'thecatapi';}catch(e){return 'thecatapi';}}
const catOther=s=>s==='thecatapi'?'cataas':'thecatapi';
function catPlan(n,items){
  if(!catKey())return [['cataas',n]];
  const c={thecatapi:0,cataas:0};(items||[]).forEach(o=>{if(o&&c[o.src]!=null)c[o.src]++;});
  let nx=catNext();
  for(let i=0;i<n;i++){
    const s=c.thecatapi<c.cataas?'thecatapi':c.cataas<c.thecatapi?'cataas':nx;
    if(c.thecatapi===c.cataas)nx=catOther(nx);
    c[s]++;
  }
  const base={thecatapi:0,cataas:0};(items||[]).forEach(o=>{if(o&&base[o.src]!=null)base[o.src]++;});
  return [['thecatapi',c.thecatapi-base.thecatapi],['cataas',c.cataas-base.cataas]].filter(x=>x[1]>0);
}
// 消した写真(不適切な画像など)のアドレス。二度と出さないように、取得のときに除く
const CAT_NG_KEY='neko-cat-ng',CAT_NG_MAX=300;
const catOkUrl=u=>typeof u==='string'&&(TCA_IMG_RE.test(u)||CATAAS_IMG_RE.test(u));
function catNg(){try{const a=JSON.parse(localStorage.getItem(CAT_NG_KEY)||'[]');return Array.isArray(a)?a.filter(catOkUrl).slice(-CAT_NG_MAX):[];}catch(e){return [];}}
function catNgAdd(u){if(!catOkUrl(u))return;const a=catNg().filter(x=>x!==u);a.push(u);try{localStorage.setItem(CAT_NG_KEY,JSON.stringify(a.slice(-CAT_NG_MAX)));}catch(e){}}
// n枚取る。片方の取得元で足りなければ、もう片方で補う
async function catFetch(n,skip,items){
  const both=!!catKey(),srcs=both?['thecatapi','cataas']:['cataas'];
  skip=new Set(skip);catNg().forEach(u=>skip.add(u));
  const plan=catPlan(n,items);
  const rs=await Promise.all(plan.map(([src,k])=>catFetchFrom(src,k,skip)));
  // 2つの取得元を交互に並べる
  let out=[];
  for(let i=0;i<n;i++)rs.forEach(r=>{if(r[i])out.push(r[i]);});
  if(out.length<n){
    const used=new Set(skip);out.forEach(o=>used.add(o.ou));
    // 足りない分は、取れなかった取得元とは別の取得元から先に試す
    const order=srcs.slice().sort((a,b)=>(plan.some(p=>p[0]===a)?1:0)-(plan.some(p=>p[0]===b)?1:0));
    for(const src of order){
      if(out.length>=n)break;
      const more=await catFetchFrom(src,n-out.length,used);
      more.forEach(o=>used.add(o.ou));out=out.concat(more);
    }
  }
  out=out.slice(0,n);
  if(out.length){try{localStorage.setItem(CAT_NEXT_KEY,catOther(out[out.length-1].src));}catch(e){}}
  const got=new Set(out.map(o=>o.src));
  try{localStorage.setItem(CAT_SRC_KEY,!out.length?'fail':got.size>1?'mix':out[0].src);}catch(e){}
  return out;
}
// catItems の null は空き枠(消した所)。保存にも {empty:true} として残し、次に開いても空きのまま
function catSaveAll(){
  if(catNoSave)return;
  const list=catItems.map(o=>o?{src:o.src,ou:o.ou,blob:o.blob||null}:{empty:true});
  jgQueue(()=>idbPut('cats',{v:2,list}));
}
// 保存した写真を読む(形式を確かめてから使う)。並び順と空き枠はそのまま
async function catLoadSaved(){
  const o=await jgQueue(()=>idbGet('cats'));
  if(o===IDB_ERR)throw new Error('idb');
  if(!o||typeof o!=='object'||(o.v!==1&&o.v!==2)||!Array.isArray(o.list))return [];
  const ng=new Set(catNg());
  const ok=o.list.slice(0,CAT_N).filter(e=>e&&typeof e==='object'&&(e.empty===true||(typeof e.ou==='string'&&!ng.has(e.ou)&&
    ((e.src==='thecatapi'&&TCA_IMG_RE.test(e.ou))||(e.src==='cataas'&&CATAAS_IMG_RE.test(e.ou)))&&
    (e.blob===null||(e.blob instanceof Blob&&e.blob.type==='image/jpeg'&&e.blob.size<20e6)))));
  const rs=await Promise.allSettled(ok.map(e=>{
    if(e.empty===true)return Promise.resolve(null);
    // 保存した写真が読めないときは、同じ写真をアドレスから読み直す(別の写真には替えない)
    if(e.blob){const u=URL.createObjectURL(e.blob);return loadImg(u).ready.then(img=>({api:true,src:e.src,ou:e.ou,blob:e.blob,url:u,img,ready:Promise.resolve(img)}),
      ()=>{URL.revokeObjectURL(u);return loadCatImg(e.ou).then(img=>catMakeItem(e.src,e.ou,img));});}
    return loadCatImg(e.ou).then(img=>({api:true,src:e.src,ou:e.ou,blob:null,url:e.ou,img,ready:Promise.resolve(img)}));
  }));
  return rs.filter(r=>r.status==='fulfilled').map(r=>r.value);
}
const catUrls=()=>new Set(catItems.filter(Boolean).map(o=>o.ou));
// 開始画面を初めて開いたとき:保存した写真を出し、6枚に足りなければ足りない分だけ取る(上限には数えない。消した空き枠は除く)
// 保存場所が読めなかったときは、表示用に写真を取るが保存はしない(前の6枚を上書きしないため)
let catNoSave=false;
async function initCats(){
  const gen=++catGen;
  catState='loading';renderCatPics();
  let items;
  try{items=await catLoadSaved();catNoSave=false;}catch(e){items=[];catNoSave=true;}
  if(gen!==catGen)return;
  if(items.length<CAT_N){
    const more=await catFetch(CAT_N-items.length,new Set(items.filter(Boolean).map(o=>o.ou)),items);
    if(gen!==catGen)return;
    items=items.concat(more);
  }
  catItems=items;catState=items.length?'ok':'fail';
  if(items.length)catSaveAll();
  renderCatPics();renderPics();
}
// k番の枠に新しい1枚を入れる(入れ替え・空き枠に足す)。うまくいったときだけ上限に数える。失敗したら元のまま
async function catFill(k){
  if(catState!=='ok'||catBusy>=0||k<0||k>=catItems.length||catLeft()<=0)return;
  const gen=catGen,old=catItems[k];
  catBusy=k;renderCatPics();
  const got=await catFetch(1,catUrls(),catItems.map((o,i)=>i===k?null:o));
  if(gen!==catGen)return;
  catBusy=-1;
  if(got.length){
    catItems[k]=got[0];
    if(old&&old.url.startsWith('blob:'))URL.revokeObjectURL(old.url);
    catUse();catSaveAll();tone(880,0,.15,.08);
  }else toast(old?'catRepFail':'catAddFail',2600);
  renderCatPics();renderPics();
}
function catReplace(){if(selApi>=0&&catItems[selApi])catFill(selApi);}
// 選んだ写真を消す(確認のあと)。不適切な画像が紛れたとき用。消した写真は二度と出さない(猫の写真・ごほうびの絵の両方から消す)。上限には数えない
function catDelAsk(){const k=selApi;if(catState==='ok'&&catBusy<0&&catItems[k])delOpen('cat',k,catItems[k]);}
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
  if(!o||(tp==='alb'?k!==selAlb:(catBusy>=0||k!==selApi)))return;
  const ou=o.ou;
  // ごほうびの絵から消すのは整理のため:その1枚だけ消す(出さない一覧には入れない。猫の写真はそのまま)
  if(tp==='alb'){
    URL.revokeObjectURL(o.url);albItems.splice(k,1);selAlb=-1;albSave();
    toast('catDelDone',2000);renderAllPics();return;
  }
  // 猫の写真から消すのは不適切な画像のため:出さない一覧に入れ、ごほうびの絵からも消す
  catNgAdd(ou);
  let ch=false;
  catItems.forEach((x,i)=>{if(x&&x.ou===ou){if(x.url.startsWith('blob:'))URL.revokeObjectURL(x.url);catItems[i]=null;ch=true;if(selApi===i)selApi=-1;}});
  if(ch)catSaveAll();
  const before=albItems.length;
  albItems=albItems.filter(x=>{if(x.ou!==ou)return true;URL.revokeObjectURL(x.url);return false;});
  if(albItems.length!==before){selAlb=-1;albSave();}
  if(tp==='alb')selAlb=-1;else selApi=-1;
  toast('catDelDone',2000);
  renderAllPics();
}
$('#catDelOv').onclick=e=>{if(e.target.id==='catDelOv')catDelClose();};
$('#catDelNo').onclick=catDelClose;
$('#catDelYes').onclick=catDelDo;
$('#catDel').onclick=()=>{ensureAudio();catDelAsk();};
$('#albDel').onclick=()=>{ensureAudio();albDelAsk();};
function renderCatPics(){
  const box=$('#catPics'),msg=$('#catMsg'),btn=$('#catMore'),del=$('#catDel'),q=$('#catQuota');box.replaceChildren();
  msg.classList.toggle('on',catState==='loading'||catState==='fail');
  msg.textContent=catState==='fail'?t('catFail'):catState==='loading'?t('catLoading'):'';
  const show=catState==='ok';
  $('#catCredit').style.display=show&&catItems.some(Boolean)?'':'none';
  $('#catBtns').style.display=show?'':'none';q.style.display=show?'':'none';
  if(catState==='loading'){
    for(let i=0;i<CAT_N;i++){const d=mk('div','pic wait');d.appendChild(mk('div','ph',t('catWait')));box.appendChild(d);}
    return;
  }
  const left=catLeft();
  catItems.forEach((o,k)=>{
    if(k===catBusy){const d=mk('div','pic wait');d.appendChild(mk('div','ph',t('catWait')));box.appendChild(d);return;}
    if(!o){
      // 空き枠:タップで1枚足す(入れ替えと同じく1日の上限に数える)
      const d=document.createElement('button');d.className='pic add';
      const ph=mk('div','ph');
      if(left>0){ph.append(mk('b',null,'+'),mk('span',null,t('catAdd')));}
      else{ph.append(mk('span',null,t('catEmpty')));d.disabled=true;}
      d.appendChild(ph);
      if(catBusy>=0)d.disabled=true;
      d.onclick=()=>{ensureAudio();catFill(k);};
      box.appendChild(d);return;
    }
    const d=document.createElement('button');d.className='pic'+(selApi===k?' sel':'');
    const im=mk('img');im.alt='';im.src=safeImgUrl(o.url);
    d.appendChild(im);
    d.onclick=()=>{if(catBusy>=0)return;selApi=k;selAlb=-1;renderAllPics();};
    box.appendChild(d);
  });
  if(!show)return;
  const noSel=selApi<0||!catItems[selApi];
  btn.textContent=catBusy>=0?t('catRepBusy'):t('catRep');
  btn.disabled=catBusy>=0||left<=0||noSel;
  del.textContent=t('catDel');
  del.disabled=catBusy>=0||noSel;
  const parts=[];
  if(left<=0)parts.push(t('catRepDone'));
  if(noSel)parts.push(t('catRepHelp'));
  if(left>0)parts.push(kana?'(きょうは あと '+left+'まい)':'(今日はあと'+left+'枚)');
  q.textContent=parts.join(' ');
}
$('#catMore').onclick=()=>{ensureAudio();catReplace();};
const curItem=()=>selApi>=0&&catItems[selApi]?catItems[selApi]:selAlb>=0&&albItems[selAlb]?albItems[selAlb]:images[selPic];
function renderAllPics(){renderCatPics();renderAlb();renderPics();}
// 選んだ絵を、最初の画面の下の欄・各パズルの開始画面に出す。「大きく見る」はイラスト・iPadの写真を選んでいるときだけ押せる
function renderSel(){
  if(typeof albItems==='undefined')return;
  const it=curItem(),u=safeImgUrl(it&&it.url);
  ['#mSelImg','#jgSelImg','#sdSelImg'].forEach(q=>{const e=$(q);if(e&&e.getAttribute('src')!==u)e.src=u;});
  $('#jgSelImg').classList.toggle('flip',selFlip);
  $('#picZoom').disabled=selApi>=0||selAlb>=0;
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
const doneFiles={};
function donePrep(item,sel){
  const b=$(sel),g=$(sel+'G'),tok={};doneFiles[sel]=tok;b.disabled=true;b.style.display='';g.style.display='';
  picFile(item).then(f=>{if(doneFiles[sel]!==tok)return;doneFiles[sel]=f;if(f)b.disabled=false;else{b.style.display='none';g.style.display='none';}});
}
$('#doneSave').onclick=()=>{ensureAudio();const f=doneFiles['#doneSave'];if(f instanceof File)sharePic(f);};
$('#sdSave').onclick=()=>{ensureAudio();const f=doneFiles['#sdSave'];if(f instanceof File)sharePic(f);};

/* ====== 絵を大きく見る ====== */
// 写真アプリに入れやすいよう、表示もJPEGにする(長押し →「写真に追加」)
let zoomTok=null,zoomFile=null,zoomUrl=null;
function zoomOpen(item){
  if(!item)return;
  const tok={};zoomTok=tok;zoomFile=null;
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
let albItems=[],albReady=false; // albReady:保存を読めた(読めていないときは上書きしない)
const newId=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8);
const catMetaOk=m=>!!m&&typeof m==='object'&&((m.src==='thecatapi'&&TCA_IMG_RE.test(m.ou))||(m.src==='cataas'&&CATAAS_IMG_RE.test(m.ou)));
function albSave(){
  if(!albReady)return;
  const list=albItems.map(o=>({id:o.id,src:o.src,ou:o.ou,blob:o.blob,at:o.at}));
  jgQueue(()=>idbPut('album',{v:1,list}));
}
async function albLoad(){
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
    const im=mk('img');im.alt='';im.src=safeImgUrl(o.url);d.appendChild(im);
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
  if(window.SD_READY)sdApplyLang();
  if(window.JG_READY)renderJgCont();
  if(window.UPD_READY)renderUpd();
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
$('#gJigBtn').onclick=()=>{ensureAudio();renderSel();show('start');$('#start').scrollTop=0;};
$('#gSdBtn').onclick=()=>{ensureAudio();renderSel();sdRenderStart();show('sdStart');$('#sdStart').scrollTop=0;};
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
  try{localStorage.setItem(SD_KEY,JSON.stringify({v:1,lv:sd.lv,giv:sd.giv.join(''),sol:sd.sol.join(''),cur:sd.cur.join(''),hint:sd.hint.join(''),memo:sd.memo,el:Math.floor(sdElapsed()),rid:sd.rid||'',img:sd.img||'',rv:sd.rv||0}));}catch(e){}
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
    return {lv:o.lv,giv,sol,cur,hint,memo:o.memo.slice(),el:Math.min(o.el,360000),rid,img,rv};
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
  if(sdLoad()){sdPending=()=>sdPlayRec(id);$('#sdNewOv').classList.add('on');}
  else sdPlayRec(id);
}
function sdPlayRec(id,item){
  const r=sdRecsLoad().find(x=>x.id===id);if(!r){sdRenderStart();return;}
  item=item||curItem();sdSetPic(item);
  qpClose();lpCancel();hideToast();
  sdPlaying=false;clearInterval(sdTimer);sdT0=0;sdClearSave();
  const giv=[...r.giv].map(Number);
  sd={lv:r.lv,giv,sol:[...r.sol].map(Number),cur:giv.slice(),memo:Array(81).fill(0),hint:Array(81).fill(0),el:0,rid:r.id,rv:0};
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
function sdNew(lv,item){
  qpClose();lpCancel();
  item=item||curItem();sdSetPic(item);
  sdPlaying=false;clearInterval(sdTimer);sdT0=0;sd=null;sdClearSave();
  sdCells.forEach(C=>{C.el.className=C.el.className.replace(/\b(giv|hn|wrong|sel|peer|same|flash|rv)\b/g,'').trim();C.v.textContent='';C.mm.style.display='none';});
  $('#sdLeft').textContent='81';$('#sdTime').textContent='0:00';
  show('sdPlay');requestAnimationFrame(sdLayout);toast('sdMaking');
  setTimeout(()=>{
    const p=sdMake(lv);
    sd={lv,giv:p.g.slice(),sol:p.sol,cur:p.g.slice(),memo:Array(81).fill(0),hint:Array(81).fill(0),el:0,rv:0};
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
  sdClearSave();recordPlay('sudoku');sdRecordClear(sec);
  sd.rv=511;sdSel=-1;sdDraw();sndDone();
  if(sdDoneRec&&sdDoneRec.newRec)[1047,1319,1568,2093].forEach((f,i)=>tone(f,1.0+i*.12,.5,.14));
  sdLastSec=sec;$('#sdDoneMsg').textContent=doneText(sec);sdRenderDone();
  $('#sdCat').src=safeImgUrl(sdItem?sdItem.url:images[0].url);
  $('#sdGift').style.display='none';
  albAddSafe(sdItem).then(g=>{$('#sdGift').style.display=g?'':'none';});
  donePrep(sdItem,'#sdSave');
  setTimeout(()=>$('#sdDoneOv').classList.add('on'),900);
}
// 最初の画面の数独の「続きから」(絵の小さな画像つき)
let sdThumbUrl=null,sdContGen=0;
async function renderSdCont(){
  const gen=++sdContGen,sv=sdLoad(),cb=$('#sdCont');
  let src=images[0].url,im=null;
  if(sv&&sv.img){im=await jgQueue(()=>idbGet('sudoku-img'));if(gen!==sdContGen)return;}
  if(sdThumbUrl){URL.revokeObjectURL(sdThumbUrl);sdThumbUrl=null;}
  if(!sv){cb.style.display='none';cb.replaceChildren();renderMenuNew();return;}
  if(im&&im!==IDB_ERR&&im.id===sv.img&&imRecOk(im)){if(im.kind==='sample')src=images[im.idx].url;else{sdThumbUrl=URL.createObjectURL(im.blob);src=sdThumbUrl;}}
  const pic=mk('img');pic.alt='';pic.src=safeImgUrl(src);
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
  sdRenderRecs();
}
function sdApplyLang(){
  sdRenderStart();renderSdCont();
  if(sdLastSec!=null)$('#sdDoneMsg').textContent=doneText(sdLastSec);
  setTg($('#sdMemoBtn'),sdMemoMode);
  sdRenderDone();
}
$('#sdCont').onclick=()=>{ensureAudio();sdContinue();};
$('#sdGo').onclick=()=>{ensureAudio();if(sdLoad()){sdPending=null;$('#sdNewOv').classList.add('on');}else sdNew(sdSelLv);};
$('#sdPicBtn').onclick=sdShowPic;
$('#sdNewOv').onclick=e=>{if(e.target.id==='sdNewOv'){sdPending=null;$('#sdNewOv').classList.remove('on');}};
$('#sdNewNo').onclick=()=>{sdPending=null;$('#sdNewOv').classList.remove('on');sdContinue();};
$('#sdNewYes').onclick=()=>{$('#sdNewOv').classList.remove('on');const f=sdPending;sdPending=null;if(f)f();else sdNew(sdSelLv);};
$('#sdRetryBtn').onclick=()=>{$('#sdDoneOv').classList.remove('on');if(sdDoneRec)sdPlayRec(sdDoneRec.id,sdItem);};
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
$('#sdAgainBtn').onclick=()=>{$('#sdDoneOv').classList.remove('on');sdNew(sd?sd.lv:sdSelLv,sdItem);};
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

/* ====== 管理用の設定(メニューの版番号を3秒長押しで開く) ====== */
// キーは画面・ログに出さない(入力欄は伏せ字、設定済みかどうかだけ表示)
let admLp=null;
const menuVer=$('#menuVer');
function admLpCancel(){if(admLp){clearTimeout(admLp.tm);admLp=null;}}
menuVer.addEventListener('pointerdown',e=>{
  admLpCancel();
  admLp={id:e.pointerId,x:e.clientX,y:e.clientY,tm:setTimeout(()=>{admLp=null;admOpen();},3000)};
});
menuVer.addEventListener('pointermove',e=>{if(admLp&&e.pointerId===admLp.id&&Math.hypot(e.clientX-admLp.x,e.clientY-admLp.y)>12)admLpCancel();});
menuVer.addEventListener('pointerup',admLpCancel);
menuVer.addEventListener('pointercancel',admLpCancel);
menuVer.addEventListener('pointerleave',admLpCancel);
menuVer.addEventListener('contextmenu',e=>e.preventDefault());
function admRender(msgKey){
  $('#admSt').textContent=catKey()?t('admSet'):t('admUnset');
  $('#admMsg').textContent=msgKey?t(msgKey):'';
  let src='';try{src=localStorage.getItem(CAT_SRC_KEY)||'';}catch(e){}
  const nm=src==='mix'?'The Cat API + cataas':src==='thecatapi'?'The Cat API':src==='cataas'?'cataas':src==='fail'?t('admSrcFail'):t('admSrcNone');
  $('#admSrc').textContent=t('admSrc')+':'+nm;
  $('#admLimV').textContent=kana?catLimit()+'まい':catLimit()+'枚';
  $('#admUsed').textContent=t('admUsed')+':'+(kana?catUsed()+'まい':catUsed()+'枚');
  const n=catItems.filter(Boolean).length;
  $('#admDb').textContent=t('admDb')+':'+(idbDiag.ok?t('admDbOk'):t('admDbNg'))+(idbDiag.fails?(kana?'(ひらけなかった かいすう '+idbDiag.fails+' '+idbDiag.last+')':'(開けなかった回数 '+idbDiag.fails+' '+idbDiag.last+')'):'')
    +' ・ '+(kana?'しゃしん '+n+'まい・ごほうび '+albItems.length+'まい':'写真'+n+'枚・ごほうび'+albItems.length+'枚')+(catNoSave?(kana?'・しゃしんは ほぞん していません':'・写真は保存していません'):'');
}
function admOpen(){ensureAudio();tone(660,0,.15,.08);$('#admKey').value='';admRender('');$('#admOv').classList.add('on');}
// キーを変えても保存した写真はそのまま(次の入れ替えから新しいキーで取る)
function admAfterChange(){renderCatPics();}
function admSetLimit(d){
  const n=Math.max(0,Math.min(CAT_LIMIT_MAX,catLimit()+d));
  try{localStorage.setItem(CAT_LIMIT_KEY,String(n));}catch(e){}
  admRender('');renderCatPics();
}
$('#admLimDn').onclick=()=>admSetLimit(-1);
$('#admLimUp').onclick=()=>admSetLimit(1);
$('#admSave').onclick=()=>{
  const v=String($('#admKey').value||'').trim();
  if(!CAT_KEY_RE.test(v)){admRender('admBad');return;}
  try{localStorage.setItem(CAT_KEY,v);}catch(e){}
  $('#admKey').value='';admAfterChange();admRender('admSaved');
};
$('#admDel').onclick=()=>{try{localStorage.removeItem(CAT_KEY);}catch(e){}$('#admKey').value='';admAfterChange();admRender('admDeleted');};
$('#admClose').onclick=()=>{$('#admKey').value='';$('#admKey').blur();$('#admOv').classList.remove('on');};

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
