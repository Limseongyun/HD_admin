(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"menu_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_name\" type=\"STRING\" size=\"256\"/><Column id=\"menu_level\" type=\"STRING\" size=\"256\"/><Column id=\"form_url\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menu_id\">1</Col><Col id=\"menu_name\">계좌</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">2</Col><Col id=\"menu_name\">상품관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">Account_Product</Col></Row><Row><Col id=\"menu_id\">3</Col><Col id=\"menu_name\">대출</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">4</Col><Col id=\"menu_name\">상품관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">loan_product</Col></Row><Row><Col id=\"menu_id\">5</Col><Col id=\"menu_name\">대출심사</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">Loan_screening</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","0","200","700",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"198\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"메뉴\"/></Band><Band id=\"body\"><Cell text=\"bind:menu_name\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:menu_level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",200,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {
        this.fn_onload = function(obj,e)
        {
        	this.Div00.form.Button00.setSelectStatus(true);
        };

        this.fn_cellclick = function(obj,e)
        {
        	var sApp = nexacro.getApplication();
        	var objFrame = sApp.mainframe.VFrameSet00.HFrameSet00.WorkFrame;
        	var srtUrl = this.Dataset00.getColumn(e.row, "form_url");
        	objFrame.set_formurl("FrameBase::"+srtUrl+".xfdl");

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncellclick",this.fn_cellclick,this);
        };

        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
