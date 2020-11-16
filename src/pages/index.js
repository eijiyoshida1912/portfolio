import React from "react"

export default () => (
  <div>
    {/* Global site tag (gtag.js) - Google Analytics */}
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Eiji Yoshida Portfolio</title>
    <link href="./style.css" rel="stylesheet" />
    <header className="header">
      <p className="header__title"><a href="/"><strong>Portfolio</strong> Eiji Yoshida</a></p>
    </header>
    <section className="top">
      <nav className="menu">
        <div className="menu__bars"><i className="fas fa-bars" id="menu__bars" /></div>
        <ul className="menu__list" id="menu__list">
          <li><a href="#profile"><i className="fas fa-user" />Profile</a></li>
          <li><a href="#works"><i className="fas fa-desktop" />Works</a></li>
          <li><a href="#contact"><i className="fas fa-envelope" />Contact</a></li>
        </ul>
      </nav>
      <div className="title">
        <h1 className="title__title">Portfolio</h1>
        <p className="title__name">Eiji Yoshida<br />2020</p>
        <i className="fas fa-chevron-down title__down" />
      </div>
    </section>
    <section className="profile" id="profile">
      <h2 className="profile__head">Profile</h2>
      <div className="profile__inner">
        <div className="profile__face_wrap">
          <img src="/images/face.png" srcSet="/images/face@2x.png 2x" className="profile__face" />
          <h3 className="profile__name">吉田　栄治<small>Eiji Yoshida</small></h3>
        </div>
        <dl className="profile__history">
          <dt>1983.12</dt>
          <dd>山形県生まれ</dd>
          <dt>2008.3 - 2009.6</dt>
          <dd>長野県松本市でギター制作の職に就く</dd>
          <dt>2013.1 -</dt>
          <dd>フリーランスの Web デザイナーとして活動</dd>
          <dt>2015.12 - 2016.1</dt>
          <dd>ミューズコー株式会社に業務委託として参加</dd>
          <dt>2016.2 - 2017.5</dt>
          <dd>ミューズコー株式会社に正社員として勤務</dd>
          <dt>2017.5 -2020.6</dt>
          <dd>株式会社キャリアインデックスにて正社員として勤務</dd>
        </dl>
        <div className="profile__skill_wrap">
          <h4 className="profile__skill_head">スキル</h4>
          <ul className="profile__skill_list">
            <li>HTML5</li>
            <li>JavaScript</li>
            <li>ウェブデザイン</li>
            <li>SQL</li>
            <li>JQuery</li>
            <li>サービス設計</li>
            <li>フロントエンド</li>
            <li>photoshop</li>
            <li>illustrator</li>
            <li>WEBサイトのUI/UX改善</li>
            <li>PHP</li>
            <li>Ruby on Rails</li>
            <li>Sass</li>
            <li>Haml</li>
          </ul>
          <p className="profile__text">Webデザイン、アプリデザインを本業に、フロントエンドもやってます。</p>
          <h4 className="profile__hobby_head">趣味、特技</h4>
          <ul className="profile__hobby_list">
            <li>絵画</li>
            <li>ギター</li>
            <li>アナログカメラ</li>
          </ul>
        </div>
      </div>
      <p className="profile__pdf"><a href="/portfolio2019.pdf" target="_blank">PDF版ポートフォリオはこちら</a></p>
    </section>
    <section className="works" id="works">
      <h2 className="works__head">Works</h2>
      <ul className="works__list">
        <li>
          <h3 className="works__name">2017.05 -2020.06<small>株式会社キャリアインデックス</small></h3>
          <div className="works_info">
            <ul className="works_info__list">
              <li>
                <img src="/images/ci.png" srcSet="/images/ci@2x.png 2x" className="works__image--ci" />
                <h4 className="works_info__title">CAREER INDEX</h4>
                <p className="works_info__text"><a href="https://careerindex.jp" target="_blank">https://careerindex.jp</a><br />サイトデザイン、フロントエンド実装</p>
              </li>
              <li>
                <img src="/images/lacotto.png" srcSet="/images/lacotto@2x.png 2x" className="works__image--lacotto" />
                <h4 className="works_info__title">Lacotto</h4>
                <p className="works_info__text"><a href="https://lacotto.jp/" target="_blank">https://lacotto.jp</a><br />サイトデザイン、フロントエンド実装</p>
              </li>
            </ul>
          </div>
          <div className="works__new">
            <h3 className="works__new_head">CAREER INDEXでのUIデザイン改善記録</h3>
            <ul className="new_list">
              <li><a href="http://eijiyoshida1912.itigo.jp/?p=9">2020.03.10 転職サイト・CAREER INDEXの登録フォーム改善</a></li>
              <li><a href="http://eijiyoshida1912.itigo.jp/?p=84">2020.03.11 転職サイト・HTML新着求人メルマガ改修</a></li>
            </ul>
          </div>
          <div className="detail_text">
            <h4 className="detail_text__head">好景気の転職業界で生き残る為のデザイン。</h4>
            <p>メインサイトである「CAREER INDEX」は、「如何にして20〜30代のユーザーを引き込むか。」が命題のプロジェクトでした。最大の流入元であるハローワークからのユーザーは高年齢層がメインなので、どうしても単価の高い、若いユーザーが取りにくい環境でした。よりわかりやすく、かつ若いユーザーに刺さりやすいUIにするかを考えながらABテストで日々の改善を行い、徐々にですが獲得していけるようなサイトになりました。<br />「CAREER INDEX」も他のプロジェクトも社内にデザイナーは一人の為、企画〜デザイン〜コーディング〜RailsのView組み込みまで1人で作業していました。<br />キャリアインデックス社では複数のサイトを横断して作業していたので、様々なジャンルの求人サイトに参加できるという密度の濃い時間でもありました。<br />現在は未経験デザイナーが1名入社し、デザインの基礎やコーディングなどを日々教育しながら業務しています。</p>
            <h5 className="detail_text__child_head">開発プロジェクト</h5>
            <ul className="detail_text__work_list">
              <li>転職求人サイト「CAREER INDEX」<a href="https://careerindex.jp" target="_blank">https://careerindex.jp</a></li>
              <li>アルバイト求人サイト「Lacotto」<a href="https://lacotto.jp/" target="_blank">https://lacotto.jp</a></li>
              <li>ファッション業界転職サイト「Fashion HR」<a href="https://fashion-hr.com/" target="_blank">https://fashion-hr.com</a></li>
              <li>ファッション業界転職キュレーションサイト「HR-Talks」<a href="https://fashion-hr.com/hr-talks/" target="_blank">https://fashion-hr.com/hr-talks</a></li>
              <li>転職業界キュレーションサイト「CAREER INDEX転職マガジン」<a href="https://careerindex.jp/contents/" target="_blank">https://careerindex.jp/contents</a></li>
            </ul>
            <p>etc.</p>
            <h5 className="detail_text__child_head">使用ツール、言語</h5>
            <ul className="detail_text__tech_list">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Emacs</li>
              <li>Git</li>
              <li>HTML5/CSS3(BEM)</li>
              <li>Sass</li>
              <li>Haml</li>
              <li>Javascript</li>
              <li>Ruby on Rails</li>
            </ul>
            <p>etc.</p>
          </div>
          <p className="to_detail_button" id="to_detail_button--ci">キャリアインデックス株式会社での<br />詳細を見る <i className="fas fa-angle-down" /></p>
        </li>
        <li>
          <h3 className="works__name">2015.12 - 2017.05<small>ミューズコー株式会社</small></h3>
          <div className="works_info">
            <ul className="works_info__list">
              <li>
                <img src="/images/museco_pc.png" srcSet="/images/museco_pc@2x.png 2x" className="works__image--mc_pc" />
                <h4 className="works_info__title">MUSE &amp; Co.</h4>
                <p className="works_info__text"><a href="https://museco.jp" target="_blank">https://museco.jp</a><br />サイトデザイン、フロントエンド・サーバーサイド実装</p>
              </li>
              <li>
                <img src="/images/museco_sp.png" srcSet="/images/museco_sp@2x.png 2x" className="works__image--mc_sp" />
                <h4 className="works_info__title">MUSE &amp; Co.アプリ<br />iOS/Android</h4>
                <p className="works_info__text">デザイン</p>
              </li>
            </ul>
          </div>
          <div className="detail_text">
            <h4 className="detail_text__head">女性の心を掴む為の UI 設計、ビジュアルデザイン。</h4>
            <p>ミューズコーがターゲットとしている20~30代の女性はスマホでのサイト閲覧が多く、ミューズコーに訪問するユーザーの8割がスマホ、さらにその中の8割がiPhoneになります。スマホで商品を閲覧、購入するためにはどのように部品を配置すれば良いのかを日々考えながら改善していく作業でした。<br />この案件で気づかされたのは「ECサイトは商品が買える便利なツールであり、画面サイズに縮小した店舗ではない」ということ。実店舗の店内を飾りつけるように Webサイトやアプリを飾りつけても、商品を買うルールがわからない、買えたかどうかわからない、ボタンが押せるのか押せないのかわからないなどの基本ができていないだけで簡単にユーザーは離れてしまう。なぜなら店から出るには閉じるボタンを押すだけだから。UI/UXという言葉を再考させられる案件でした。<br />良いアプリケーションデザインを作るためにはシステム面も知らなければならないという思いから、サイトのサーバサイド開発 (Laravel)、JavaによるAndroidアプリの開発にも参加。システム面を学んだことで、少なくとも実現不可能なデザインを作成するデザイナーにはならないで済んだかもしれません。</p>
            <h5 className="detail_text__child_head">開発プロジェクト</h5>
            <ul className="detail_text__work_list">
              <li>ファッションECサイト「Muse &amp; Co.」<a href="https://museco.jp" target="_blank">https://museco.jp</a></li>
              <li>Android/iOSアプリ「Muse &amp; Co.」</li>
            </ul>
            <p>etc.</p>
            <h5 className="detail_text__child_head">使用ツール、言語</h5>
            <ul className="detail_text__tech_list">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Prott</li>
              <li>Adobe XD</li>
              <li>Adobe Animate CC</li>
              <li>Emacs</li>
              <li>Android Studio</li>
              <li>Git</li>
              <li>HTML5/CSS3</li>
              <li>Sass</li>
              <li>Java</li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>Laravel</li>
            </ul>
            <p>etc.</p>
          </div>
          <p className="to_detail_button" id="to_detail_button--mc">ミューズコー株式会社での<br />詳細を見る <i className="fas fa-angle-down" /></p>
        </li>
        <li>
          <h3 className="works__name">2013.01 - 2015.12<small>フリーランスでのWebサイト制作活動</small></h3>
          <div className="works_info">
            <ul className="works_info__list">
              <li>
                <img src="/images/myuu.png" srcSet="/images/myuu@2x.png 2x" className="works__image--myuu" />
                <h4 className="works_info__title">Myuu</h4>
                <p className="works_info__text"><a href="http://myuu.jp" target="_blank">http://myuu.jp</a><br />企画、デザイン、コーディング、WordPress 組込<br />キュレーションメディアの立ち上げに参加。開発全行程をほぼ一人で担当。</p>
              </li>
              <li>
                <img src="/images/visits.png" srcSet="/images/visits@2x.png 2x" className="works__image--visits" />
                <h4 className="works_info__title">VISITS</h4>
                <p className="works_info__text"><a href="http://visits.world" target="_blank">http://visits.world</a><br />コーディング、WordPress 組込<br />投稿機能、レスポンシブデザインなど高機能なサイトながら2週間ほどでリリースのスピード案件。</p>
              </li>
            </ul>
          </div>
          <div className="detail_text">
            <h4 className="detail_text__head">受注から2週間で公開の高回転WordPressサイト。</h4>
            <p>基本的に受注から本番アップロード・完成まで平均 2 週間程。デザインは 3日、HTML/CSS コーディングは 1 ページあたり 2 時間、 残り 1 週間をシステム開発、テストにあてる。期限が短いムチャな 案件はデザインから公開まで 3 日ほど!<br />常に 2~3 人の少人数(場合によって 1 人)なので、システム面はほぼ全て Wordpress。デザインはテーマ等使わずにフルオリジナルで作成しました。後期は Bootstrap も使用し、さらにスピード感ある開発を意識しました。クライアントとの直接交渉や打ち合わせを こなしつつ複数の案件を掛け持ちで運用することも多く、開発・運用するサイトも個人サイト、コーポレートサイト、EC サイト、キュレーションメディアなど幅広く、知見を広めた時期でした。サイトの改善などを連絡が入り次第迅速に行う事がクライアントとの関係を保つ秘訣だという事(つまり、フリーランスは時間に厳しく)をこれらの案件から学びました。</p>
            <h5 className="detail_text__child_head">開発プロジェクト</h5>
            <p>制作サイト多数</p>
            <h5 className="detail_text__child_head">使用ツール、言語</h5>
            <ul className="detail_text__tech_list">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Emacs</li>
              <li>HTML5/CSS3</li>
              <li>Sass</li>
              <li>Javascript</li>
              <li>WordPress</li>
              <li>PHP</li>
              <li>Fireworks</li>
            </ul>
            <p>etc.</p>
          </div>
          <p className="to_detail_button" id="to_detail_button--fl">フリーランスの<br />詳細を見る <i className="fas fa-angle-down" /></p>
        </li>
      </ul>
    </section>
    {/* <section class="contact" id="contact">
       <h2 class="contact__head">Contact</h2>
       <?php echo do_shortcode('[contact-form-7 id="5" title="コンタクトフォーム 1"]'); ?>
       </section> */}
    <footer>
      <p className="address">©Eiji Yoshida 2020</p>
    </footer>
  </div>
)
