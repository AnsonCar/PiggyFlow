# 技術文檔

## 開發方式
### Setp 1 
下載源代碼
```
git clone https://github.com/AnsonCar/PiggyFlow.git
```

### Setp 2
更新到最新版本
>（每次開的分支都需要確保為最新版本，減少麻煩）
```
git pull
```

### Step 3
根據開發需求，開設分支。
1. 先寫上你的名字，方便分別開發者。
2. 如果是新增功能就寫 feature，如果是修復Bug就寫 fix
3. 最後寫下大約會在這分支的事情
```
git checkput -b username/[feature|fix]/XXXX
```

###  Step 4
開發完成後，就可以 ...