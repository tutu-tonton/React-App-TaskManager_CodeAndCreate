# ⚛️ React App - Task manager / context API / Hooks

:arrow_forward: [React App with Context API and React Hooks / Build a Task Manager using React / Context API / Hooks
](https://www.youtube.com/watch?v=fqup-BL3VjI)

![](https://github.com/tutu-tonton/React-App-TaskManager_CodeAndCreate/blob/master/Jul-04-2020%2020-59-38.gif)

## 作成手順

0. fontawesome読み込み

--- context内の各taskが、表示されるか確認 ---
--- 最小限のstateで表示されるか

1. TaskContext.js - context作成 / stateにtask所持
2. TaskList.js - context受け取り / tasksを受け取ってイテレート
3. TaskItem.js - 個別タスク

4. TaskForm作成 - input欄
5. Header作成

--- CRUD処理 ---

6. addTask
   1. TaskListContext: addTask-func作成.providerに渡す
   2. TaskForm内にlocalState作成。入力値を所持。入力値がセットされるか確認
   3. submitでcontext内のstateに追加されるか確認
7. removeTask
   1. Context: removeTask-func作成。filterメソッド
   2. TaskItem.js: ボタンクリックでid情報が渡される
8. All Clear
   1. Context: clearList-func作成。空配列にするだけ
   2. TaskForm.js: ボタンクリックで発火

9. Taskない時の表示

--- Edit Button ---

10. id特定 -> 
    1.  Context: idを特定する関数作成。localState-editItem作成。
    2.  ボタンクリックすると、そのidがeditItemに格納される
11. 編集内容で新配列作る
    1.  Context: newTasks作る - 編集アイテムは新タイトルに変更して、その他はそのままで新配列を作る
    2.  TaskForm.js: useEffect-編集アイテムでsetTitle
    3.  編集アイテムのidに対して、タイトルを上書きするように

--- localStorageに保存 ---

12. local-set-json-stringify
13. json-parse-local-get
