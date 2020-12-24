import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <section className="single_content">
      <div className="single_content__inner">
        <h1 className="single_content__title">転職サイト・CAREER INDEXの登録フォーム改善</h1>
        <div className="single_content__content"><p>2020年3月現在勤めているキャリアインデックス社の運営する転職サイト「CAREER INDEX」の会員登録フォーム改善案を作成しました。改善の目的は「離脱率の減少」になります。</p>
          <h2>前提</h2>
          <ul>
            <li>今回はスマートフォン用ページのみの改修になります。</li>
            <li>電話番号の入力が3つに分かれていてイケてないのですが、これはサービスの仕様上変更できないそうです。</li>
          </ul>
          <h2>登録の流れ</h2>
          <div className="separate-pc">
            <figure>
              <Img fluid={data.img01.childImageSharp.fluid} alt="" />
              <figcaption>図1.認証ページ</figcaption>
            </figure>
            <ul className="separate-pc__img1text">
              <li>ユーザーはメール認証ページよりメールアドレスを入力してもらいます。</li>
              <li>入力したアドレスにメールが届き、そのメールから登録フォームにリンクすることで会員登録がスタートします。</li>
            </ul>
          </div>
          <h2>旧デザインの問題点</h2>
          <div className="separate-pc">
            <figure>
              <Img fluid={data.img02.childImageSharp.fluid} alt="" />
              <figcaption>図2.旧デザイン全体</figcaption>
            </figure>
            <ul className="separate-pc__img1text">
              <li>認証メール→会員登録完了までの完了率はSPで58%ほど。</li>
              <li>一昨年あたりにデザイン改修してだいぶマシにはなってきているが、まだまだ改善する点はあるはず。</li>
            </ul>
          </div>
          <h2>新デザイン</h2>
          <p>こちらでプロトタイプを試すことができます。→<a href="http://eijiyoshida1912.itigo.jp/touroku/" target="_blank" rel="noopener noreferrer">http://eijiyoshida1912.itigo.jp/touroku/</a></p>
          <h3>上記プロトタイプは…</h3>
          <ul>
            <li>入力されていない場合のみバリデーションが動きます。</li>
            <li>エラー後に出るトップのエラー表示はダミーです。</li>
            <li>「直近の業種を選択」「直近の職種を選択」などのボタンは旧デザインと変更がないため動作を実装していません。本番では選択モーダルが表示されます。</li>
            <li>登録フォームページのみの実装なので、次の画面に進めません。</li>
          </ul>
          <h3>1.カードデザインを強調し、各項目の見出しもわかりやすく表示</h3>
          <div className="separate-pc">
            <figure>
              <Img fluid={data.img03.childImageSharp.fluid} alt="" />
              <figcaption>図3.カードデザイン</figcaption>
            </figure>
            <p className="separate-pc__img1text">旧デザインもカードデザインは一応採用していたのですが、よりセクションを強調するために左右も空間をあけました。旧デザインではのっぺりと長い入力フォームが続く感覚でしたが、セクションを強調することによって各項目を一つ一つ完了していく感覚を作れるようにしました。</p>
          </div>
          <h3>2.ページ上部のフロー表示を廃止</h3>
          <div className="separate-pc">
            <div className="separate-pc__img2">
              <figure>
                <Img fluid={data.img04.childImageSharp.fluid} alt="" />
                <figcaption>図4.ページフロー旧デザイン</figcaption>
              </figure>
              <figure>
                <Img fluid={data.img05.childImageSharp.fluid} alt="" />
                <figcaption>図5.ページフロー新デザイン</figcaption>
              </figure>
            </div>
            <div className="separate-pc__img2text">
              <p>誰も見てなさそう、登録が長く見えそうと理由から削除しました。</p>
              <p>また、<a href="https://designnotes.blog.gov.uk/2014/07/07/do-less-problems-as-shared-spaces/" target="_blank" rel="noopener noreferrer">この記事(Do less – Problems as shared spaces)</a>によれば、<br />
              </p>
              <blockquote>We then measured the difference in our completion rates. We found that without a progress bar, completion rates stayed exactly the same while other key metrics, like time to completion and the total amount of online applications, were also unaffected.</blockquote>
              <p>進捗バー削除前後で完了率を測定したところ、削除してもほとんど完了率に影響が無かったそうです。</p>
            </div>
          </div>
          <h3>3.エラーメッセージや注意メッセージをラベルの下にした</h3>
          <div className="separate-pc">
            <div className="separate-pc__img2">
              <figure>
                <Img fluid={data.img06.childImageSharp.fluid} alt="" />
                <figcaption>図6.エラーメッセージ旧デザイン</figcaption>
              </figure>
              <figure>
                <Img fluid={data.img07.childImageSharp.fluid} alt="" />
                <figcaption>図7.エラーメッセージ新デザイン</figcaption>
              </figure>
            </div>
            <p className="separate-pc__img2text">旧デザインだと、項目を入力しようと仮想キーボードを表示した場合、キーボードでエラーメッセージが隠れてしまうことがあります。<br />エラーメッセージの見逃し防止のためにメッセージをラベルの下に移動させました。</p>
          </div>
          <figure>
            <Img fluid={data.img08.childImageSharp.fluid} alt="" />
            <figcaption>図8.エラーメッセージが隠れた状態</figcaption>
          </figure>
          <h3>4.送信ボタンを画面下固定にした</h3>
          <div className="separate-pc">
            <div className="separate-pc__img2">
              <figure>
                <Img fluid={data.img09.childImageSharp.fluid} alt="" />
                <figcaption>図9.送信ボタン新デザイン</figcaption>
              </figure>
              <figure>
                <Img fluid={data.img10.childImageSharp.fluid} alt="" />
                <figcaption>図10.送信ボタンが画面を隠す</figcaption>
              </figure>
            </div>
            <div className="separate-pc__img2text">
              <p>本番では項目が全て埋まるとボタンのテキストが「次画面に進む」に変わります。入力が全て済んだことがわかりやすくなるように画面下固定にしました。</p>
              <p>ただ、現在の本番環境で実験したところ、入力エラー率が微増し、確認画面までの到達率が若干低下したことがわかりました。</p>
              <p>
                入力エラー率
                変更前　1/18〜1/24 11.7％
                変更後　2/18〜2/24 12.4％
                確認画面までの到達率
                変更前　1/18〜1/24 56.0％
                変更後　2/18〜2/24 53.8％
              </p>
              <p>様々検証したところ、仮想キーボードを表示させるときに送信ボタンが画面を狭くしてしまうのが原因ではないかという仮説を立てました。</p>
              <p>現在は画面の縦幅が450px以下の場合にボタンを非表示にするという対策を施し、検証中です。新デザインでは上記対策を加えた実装になっています。</p>
            </div>
          </div>
          <h3>5.性別ラジオボタンを押しやすくした</h3>
          <div className="separate-pc">
            <div className="separate-pc__img2">
              <figure>
                <Img fluid={data.img11.childImageSharp.fluid} alt="" />
                <figcaption>図11.ラジオボタン旧デザイン</figcaption>
              </figure>
              <figure>
                <Img fluid={data.img12.childImageSharp.fluid} alt="" />
                <figcaption>図12.ラジオボタン新デザイン</figcaption>
              </figure>
            </div>
            <p className="separate-pc__img2text">ラジオボタンがむき出しになっていると小さくて押しにくそうなので、押しやすく見えるために枠で囲みました。</p>
          </div>
          <h3>6.パスワード入力をシンプルにした</h3>
          <div className="separate-pc">
            <div className="separate-pc__img2">
              <figure>
                <Img fluid={data.img13.childImageSharp.fluid} alt="" />
                <figcaption>図13.パスワード入力旧デザイン</figcaption>
              </figure>
              <figure>
                <Img fluid={data.img14.childImageSharp.fluid} alt="" />
                <figcaption>図14.パスワード入力新デザイン</figcaption>
              </figure>
            </div>
            <div className="separate-pc__img2text">
              <p>旧デザインの登録フォームだとパスワードを確認のため2度入力しなければならないので、シンプルに一度だけの入力にしました。パスワードのフォーム横に「表示する」ボタンを設置し、押すごとに「表示する」「非表示」にボタンテキストを切り替え、パスワード表示を切り替えるような仕様にしました。</p>
              <h4>参考</h4>
              <ul>
                <li><a href="https://uxmilk.jp/18568" target="_blank" rel="noopener noreferrer">登録フォームにおけるパスワード確認用の入力欄は必要か</a></li>
                <li><a href="https://digiper.com/topics/article/199.shtml" target="_blank" rel="noopener noreferrer">メールアドレスの2度入力はあまり意味がない？</a></li>
              </ul>
            </div>
          </div>
          <h2>まとめ</h2>
          <p>以上、様々な改善案を盛り込んだフォームデザインを作成しましたが、すべての改善案はCAREER INDEX内で検証中、または検証済みのものです。</p>
          <h3>1.カードデザインを強調し、各項目の見出しもわかりやすく表示</h3>
          <p>こちらは数年前に現在のデザイン（今回で言う旧デザイン）にし、多少離脱率が抑えられました。（少し前の実験なので、詳細なデータは残っていません…）</p>
          <h3>4.送信ボタンを画面下固定にした</h3>
          <p>こちらは変更して一度数値が悪化していますが、仮想キーボード表示中にボタンを非表示にすることによってどう変化するかを検証中です。</p>
          <h3>2.ページ上部のフロー表示を廃止<br />3.エラーメッセージや注意メッセージをラベルの下にした<br />5.性別ラジオボタンを押しやすくした<br />6.パスワード入力をシンプルにした</h3>
          <p>こちらの施策は現在数値測定中です。</p>
          <p>現在のサイトで細かい検証を続け、一定の結果が取れた時期にこのデザインと入れ替える予定になっています。</p></div>
        <p className="single_content__back"><a href="http://eijiyoshida1912.itigo.jp">&lt; ホームに戻る</a></p>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    img01: file(relativePath: {eq: "2020-03-10/img01.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img02: file(relativePath: {eq: "2020-03-10/img02.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img03: file(relativePath: {eq: "2020-03-10/img03.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img04: file(relativePath: {eq: "2020-03-10/img04.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img05: file(relativePath: {eq: "2020-03-10/img05.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img06: file(relativePath: {eq: "2020-03-10/img06.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img07: file(relativePath: {eq: "2020-03-10/img07.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img08: file(relativePath: {eq: "2020-03-10/img08.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img09: file(relativePath: {eq: "2020-03-10/img09.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img10: file(relativePath: {eq: "2020-03-10/img10.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img11: file(relativePath: {eq: "2020-03-10/img11.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img12: file(relativePath: {eq: "2020-03-10/img12.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img13: file(relativePath: {eq: "2020-03-10/img13.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img14: file(relativePath: {eq: "2020-03-10/img14.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
