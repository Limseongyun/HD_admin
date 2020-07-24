(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
            // global dataset
            obj = new Dataset("Dataset0", this);
            obj._setContents("<ColumnInfo><Column id=\"menu_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_name\" type=\"STRING\" size=\"256\"/><Column id=\"menu_level\" type=\"STRING\" size=\"256\"/><Column id=\"form_url\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menu_id\">1</Col><Col id=\"menu_name\">계좌</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">2</Col><Col id=\"menu_name\">상품관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\"/></Row><Row><Col id=\"menu_id\">3</Col><Col id=\"menu_name\">대출</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">4</Col><Col id=\"menu_name\">상품관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">loan_product</Col></Row><Row><Col id=\"menu_id\">5</Col><Col id=\"menu_name\">대출심사</Col><Col id=\"menu_level\">1</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1024","768",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("TopLeftFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);

            obj.set_formurl(nexacro._quickview_formurl);

            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };

		// script Compiler

        
        this.loadPreloadList();

    };
}
)();
