(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Chat");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize


            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Chat.xfdl", function() {

        //첫화면 로딩이 되는 스크립트
        this.myload = function(obj,e){
        	//alert('asdf');
        	var url='https://192.168.0.167:3000/chatClient';
        	//window.location.href='https://www.naver.com/';
        	window.open(url,'_blank','height=1000,width=1000,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=0')

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.myload,this);
        };

        this.loadIncludeScript("Chat.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
