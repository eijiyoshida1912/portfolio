import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <section className="single_content">
      <div className="single_content__inner">
        <h1 className="single_content__title">転職サイト・HTML新着求人メルマガ改修</h1>
        <div className="single_content__content"><h2>目的</h2>
          <p>今まで使っていた新着求人メルマガがあまり数値が芳しくない。<br />さらに、テキストメールとHTMLメールを同時に2通送っていたので、これをマルチパートメールにしたい。</p>
          <h2>旧メルマガの問題点</h2>
          <div className="separate-pc">
            <figure>
              <Img fluid={data.img01.childImageSharp.fluid} alt="" />
              <figcaption>図1.旧HTMLメルマガ</figcaption>
            </figure>
            <ul className="separate-pc__img1text">
              <li>求人に社名がない、画像もNO IMAGEがほぼ全て。</li>
              <li>オレンジの配色など、転職サイトとはなんの脈絡もないデザイン。</li>
            </ul>
          </div>
          <h3>CV率</h3>
          <p>HTMLメルマガは平均でCVR0.8%ほど。<br />一般的なメルマガのCVRが1%と言われているが、今回のメルマガの場合10個以上の求人リンクがあるので、一般的なメルマガよりは相当低いと思われる。</p>
          <h3>件名</h3>
          <figure style={{width: "100%"}}>
            <Img fluid={data.img02.childImageSharp.fluid} alt="" />
            <figcaption>図2.旧HTMLメルマガの件名</figcaption>
          </figure>
          <p>【新着求人】11月01日_吉田様の希望求人が更新されました／CAREER INDEX</p>
          <p>日付以外内容が毎日同じなので、変化をつけて注目させるようにしたい。</p>
          <h2>改善案作成</h2>
          <h3>ver 1.0 (2019/11/25)</h3>
          <div className="separate-pc">
            <figure>
              <Img fluid={data.img03.childImageSharp.fluid} alt="" />
              <figcaption>図3.新HTMLメルマガデザイン案ver.1</figcaption>
            </figure>
            <div className="separate-pc__img1text">
              <h3>デザインのポイント</h3>
              <ul>
                <li>旧メルマガはオレンジとか青とか緑とか。全体を青で統一して、サイトとの違和感を減らした。違和感を減らして遷移率を上げたい。</li>
                <li>画像はNO IMAGEが多かったので削除した。</li>
                <li>トップにユーザーの希望条件を表示させて、条件を再確認させる。</li>
                <li>年収帯を表示させて求人に興味を持ってもらう。</li>
                <li>地域を求人内に再表示させて、ユーザーに再確認させる。</li>
                <li>「求人を見る」ボタンはあるが、より押しやすくするため白枠全体をクリックできるようにする。</li>
                <li>フォントサイズは最低16px。可読性の確保と、Gmailで見た時に小さいフォントだと勝手に拡大されるのを防ぐため。</li>
                <li>押しやすいように1ブロック全体をaタグで囲った。</li>
              </ul>
            </div>
          </div>
          <h3>件名</h3>
          <p>「【12/6の新着求人】有限会社蓮尾バナーなどの求人が届いています」</p>
          <p>件名を上記に変更した。</p>
          <h2>テスト配信後に気づいたver 1.0問題点</h2>
          <div className="separate-pc">
            <div className="separate-pc__img2">
              <figure>
                <Img fluid={data.img04.childImageSharp.fluid} alt="" />
                <figcaption>図4.新HTMLのテスト配信画面</figcaption>
              </figure>
              <figure>
                <Img fluid={data.img05.childImageSharp.fluid} alt="" />
                <figcaption>図5.新HTMLのテスト配信画面・メーラー</figcaption>
              </figure>
            </div>
            <div className="separate-pc__img2text">
              <p>他は問題なさそうだが、文字がかなり大きい。</p>
              <p>件名が、株式会社キャ、で切れている</p>
              <p>「あなたの希望条件にマッチした…」は毎日同じ内容なので、変化が欲しい</p>
            </div>
          </div>
          <h2>ver 1.1(2019/12/17)</h2>
          <div className="separate-pc">
            <figure className="separate-pc__img1">
              <Img fluid={data.img06.childImageSharp.fluid} alt="" />
              <figcaption>図6.メルマガデザインver1.1</figcaption>
            </figure>
            <div className="separate-pc__img1text">
              <h3 style={{marginTop: 0}}>デザイン</h3>
              <p>フォントサイズを見出しを24px→18px、メインテキスト16px→14pxに小さくした。ビズリーチのメルマガが12pxとか使っていたので、最近のGmailは小さくても大丈夫なのかも。<br />本文の内容がメール一覧にも出るので、見出しを変化のある内容にした。日付と地域、求人セグメント。</p>
              <h3>件名</h3>
              <p>「株式会社○○などの求人が届いています」</p>
              <ul>
                <li>メール一覧に社名が収まるようにトップに持ってきた</li>
                <li>日付を本文中に移動した</li>
                <li>会社名が非公開で出せない場合、「東京都、インターネット・WEB系の求人が届いています」</li>
              </ul>
            </div>
          </div>
          <h2>12/17 第一弾HTMLメルマガ配信</h2>
          <a href="http://eijiyoshida1912.itigo.jp/wp-content/uploads/2020/03/1219件名.png" />
          <figure>
            <Img fluid={data.img07.childImageSharp.fluid} alt="" />
            <figcaption>図7.メルマガ件名</figcaption>
          </figure>
          <p>いきなり会社名全非公開なんですが…w</p>
          <p>非公開の場合は求人の説明文を件名に引用したい。<br />変更案<br />「○○○○（求人のタイトル。15文字で切る）…の求人が届いています」</p>
          <h2>2019/12/26 新着メルマガリニューアル後の数値</h2>
          <figure>
            <Img fluid={data.img08.childImageSharp.fluid} alt="" />
            <figcaption>図8.リニューアル後数値</figcaption>
          </figure>
          <ul>
            <li>→クリック数増加、CTR上昇、CV増加</li>
            <li>→無駄な配信数を減らしたことでクリック・CTRに好影響</li>
            <li>※減らした方の分のCVもカバーできている</li>
          </ul>
          <h2>2020 1/7 メルマガ件名の改善</h2>
          <p>現状<br />株式会社ワンゴジュウゴなどの求人が届いています</p>
          <h3>第一案</h3>
          <p>横屋様に株式会社ワンゴジュウゴなどの求人が届いています</p>
          <p>「（名字）様に」を冒頭に追加してみる。</p>
          <h3>第二案</h3>
          <p>☀️新着☀️株式会社ワンゴジュウゴなどの求人が届いています</p>
          <p>冒頭に絵文字（太陽）を追加してみる。</p>
          <h2>2020/1/16 メール件名に苗字追加</h2>
          <figure>
            <Img fluid={data.img09.childImageSharp.fluid} alt="" />
            <figcaption>図9.苗字追加後数値</figcaption>
          </figure>
          <p>変更前後１週間の平均で比較。（1月9日～1月15日と1月16日～23日）</p>
          <p>苗字を入れた方がCTR1.1%上がった。</p><p>
         </p><h2>まとめ</h2>
          <ul>
            <li>サイトと統一感のあるデザインにし、整頓することでCTRが1%以上上がった。</li>
            <li>名字を入れ、さらに日々変化のある件名にしたことでさらにCTRが1%以上上がった。</li>
            <li>今後さらに件名を検証する余地あり。</li>
            <li>求人画像を表示させてみてどう変わるかが検証できる。</li>
          </ul>
        </div>
        <p className="single_content__back"><a href="/">&lt; ホームに戻る</a></p>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    img01: file(relativePath: {eq: "2020-03-11/img01.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img02: file(relativePath: {eq: "2020-03-11/img02.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img03: file(relativePath: {eq: "2020-03-11/img03.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img04: file(relativePath: {eq: "2020-03-11/img04.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img05: file(relativePath: {eq: "2020-03-11/img05.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img06: file(relativePath: {eq: "2020-03-11/img06.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img07: file(relativePath: {eq: "2020-03-11/img07.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img08: file(relativePath: {eq: "2020-03-11/img08.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img09: file(relativePath: {eq: "2020-03-11/img09.png"}) {
      childImageSharp {
        fluid(maxWidth: 693) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
