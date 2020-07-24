(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Menu("Menu00","200","0","824","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset0");
            obj.set_captioncolumn("menu_name");
            obj.set_idcolumn("menu_id");
            obj.set_levelcolumn("menu_level");
            obj.set_background("#1369D8");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#1572E8");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","0","199","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("ImageViewer00");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1024,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {

        this.Menu00_onmenuclick = function(obj,e)
        {

        };

        this.Div00_ImageViewer00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Menu00.addEventHandler("onmenuclick",this.Menu00_onmenuclick,this);
            this.Div00.form.ImageViewer00.addEventHandler("onclick",this.Div00_ImageViewer00_onclick,this);
        };

        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
