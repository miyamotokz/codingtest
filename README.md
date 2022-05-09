# これはなに
各都道県の総人口推移グラフを見れるアプリ
株式会社ゆめみさんのフロントエンドコーディング試験のお題。
※応募者ではなくツイッター見てたら流れてきたのでやってみただけです。

https://notion.yumemi.co.jp/0e9ef27b55704d7882aab55cc86c999d

# コンポーネント
- APP　チェックボックスの状態を管理、都道県名とコードをフェッチしてチェックボックスとグラフ用の子コンポーネントに流します。

- todohukenChekboxContainer　チェックボックス包んでる。都道府県名のフェッチ終わるまではLoadingという文字を返す。フェッチ終わったらチェックボックスの描画。
- todohukenCheckbox　各都道府県のチェックボックス。チェックされたらAPPへ都道府県番号を返して管理してもらいます。
- graphcontainer　グラフ描画用コンテナ。課題には「チェックされた時にAPIを叩く」的なことが書いてありましたが、初回の呼び出しで一気に読み込んで表示するデータだけ決める感じにしました。APPが管理するチェックリストを受け取り描画用のデータを作る処理を呼ぶ。取得完了前はLoadingという文字だけ表示。

# 工夫した点
キャッシュ付きでフェッチするにはSWRがいいらしいので使いました。データはそう頻繁に変わるものではないのでuseSWRImutableでページ読み込み時のみAPIを叩いてそれ以降はフェッチせずキャッシュを使い回す感じに。

チェックしたリストだけを取り回すようにして管理を楽にしました。

描画とデータの処理はできるだけ分けるようにしました。

# 無理だったこと
- 命名(todohukenて)
- コミットの粒度 あまり気にせず眠くなったらセーブして寝るくらいの感じで使ってたのでバージョンの意識が全くないことがわかりました。
- githubActions 前に試しに使った時はできたのになぜかこのプロジェクトではコピペでは倒せなかった…　gh-pagesコマンドのdeploy使いました。APIキーを隠すために環境変数使いたくて粘りましたが、ビルドする場所がローカルならローカルの環境変数そのまま使われますね。わかってなかった。
- githubActionsのワークフローを作るときにローカルでフォルダ名タイポして動かず、github上でGUIで作ったらコンフリクトして履歴めちゃくちゃになった気がしますが使い方わかってないのでどうなってるかはわからないという。

# かかった時間
6日の15時ごろにやるってツイートして9日の朝8時くらいに終わりました。休日2日ちょっと、実際の作業時間だと30時間ほどかかってると思います。
実務未経験です。ずっと打ち込んでたわけではないので経験年数はよくわかりません。

# 感想
axios,SWR,Hightcharts,TypeScript,ESLint全部初めて使いました。TSとESLintはお試し程度に使ったことはありましたが、厳格過ぎて最初の数時間はずっと型のこと調べてました。型付言語じゃなくて型が大量にあるって意味のネーミングですかこれ。

CSSについては普段はTailwindでえいやしてるのでCSS-in-jsとかstyled-Componentとかあるうちのなにを使うかで悩んで比較記事を比較した結果普通に書きました。
個人的にはCSS moduleがロジックとスタイリングの分離具合が好きですが別のCSS moduleがレベル3だったりこっちのCSS moduleが保守のみと色々とゴタゴタしてるようで…。
これまで自分が必要な時にちょっと便利そうなライブラリ使いつつ作っていらなくなったら消すといった感じのツールしか作ってこなかったので、人に見せるものを作るのは10年ぶりくらいかもしれません。ライフサイクルとか何もわからなくてとても楽しかったです。