## 2. ref 與 props 2021/07/12

### 2.1 ref 的用法:

    (1). 給組件標籤指定ref:<Demo ref="xxxx"/>, 獲取到的是組件標籤實例對象vc
    (2). 給html標籤指定ref:<input ref="xxxx">, 獲取到的是真實DOM節點
    (3). 通過this.$refs獲取

### 2.2 props 的用法

    (1). 傳遞props: <Demo :a="xxx">
    (2). Demo組件中聲明接收:
        第一種(只聲明):
            props:['userName']
        第二種(限制類型):
            props:{
                userName:Number
            }
        第三種(限制類型、屬性，設定默認值):
            props:{
                useName:{
                    type:String,
                    required:true,
                    default:'老王'
                }
            }
