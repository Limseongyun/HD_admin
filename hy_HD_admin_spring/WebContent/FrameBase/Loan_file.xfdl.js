(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Loan_file");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(470,330);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("filecheck", this);
            obj._setContents("<ColumnInfo><Column id=\"lf_num\" type=\"INT\" size=\"256\"/><Column id=\"lc_num\" type=\"INT\" size=\"256\"/><Column id=\"lf_name\" type=\"STRING\" size=\"256\"/><Column id=\"lf_oriname\" type=\"STRING\" size=\"256\"/><Column id=\"lf_sysdate\" type=\"STRING\" size=\"256\"/><Column id=\"down\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("url", this);
            obj._setContents("<ColumnInfo><Column id=\"url\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GroupBox("GroupBox00","9","9","452","312",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제출서류 명단");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","18","25","436","290",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("filecheck");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"54\"/><Column size=\"115\"/><Column size=\"96\"/><Column size=\"92\"/><Column size=\"44\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"대출번호\"/><Cell col=\"2\" text=\"파일종류\"/><Cell col=\"3\" text=\"파일명\"/><Cell col=\"4\" text=\"제출일\"/><Cell col=\"5\" text=\"다운\"/></Band><Band id=\"body\"><Cell text=\"bind:lf_num\"/><Cell col=\"1\" text=\"bind:lc_num\"/><Cell col=\"2\" text=\"bind:lf_name\"/><Cell col=\"3\" text=\"bind:lf_oriname\"/><Cell col=\"4\" text=\"bind:lf_sysdate\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"다운\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",470,330,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Loan_file.xfdl", function() {

        this.Loan_file_onload = function(obj,e)
        {
        	//lc_num = this.parent.lc_num.value
        	lc_num = 101
        	this.alert(lc_num)
        	this.file()

        };

        this.file = function ()
        {
        	var id = "urlTest01";
        	var url = "http://192.168.0.18:8080/hy_HD_admin_spring/filecheck?lc_num="+lc_num;
        	var reqDs = "";
        	var respDs = " filecheck=ar"; //데이터 셋을 response
        	var args = "";
        	var callback = "received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received


        	= function (id,code,message)
        	{
        		//alert(id+","+code+","+message);
        	};
        };



        this.Grid00_oncellclick = function(obj,e)
        {
        	var lc_num = this.filecheck.getColumn(this.filecheck.rowposition,"lc_num")
        	var lf_oriname = this.filecheck.getColumn(this.filecheck.rowposition,"lf_oriname")
        	if(e.col == 5){
        	alert(lc_num)
        	alert(12131)
        	this.filedown(lc_num,lf_oriname)
        	//this.downloadfile()
        	}
        };

        this.filedown = function(lc_num,lf_oriname){

        	var fileDir = "resources\\upload\\101\\"
        	var fileName = "g1.jpg";


        	var id = "urlTest01";
        	var url = "http://192.168.0.18:8080/hy_HD_admin_spring/filedown?fileDir="+fileDir+"&fileName="+fileName;
        	var reqDs = "";
        	var respDs = ""; //데이터 셋을 response
        	var args = "";
        	var callback = "received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received


        	= function (id,code,message)
        	{
        		alert(id+","+code+","+message);
        	};


        }



        this.downloadfile = function(i)
        {
        	this.fileDownTrans.clearPostDataList();

        	this.fileDownTrans.set_downloadfilename(this.filecheck.getColumn(i, "lf_oriname"));	//runtime 전용 프로퍼티

        	this.fileDownTrans.setPostData(
        		"filepath",
        		"C:\\ikosmo64\\spring\\hdspace\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp1\\wtpwebapps\\project_Dank\\resources\\upload\\101\\"
        	);
        	this.fileDownTrans.setPostData(
        		"filename",
        		this.filecheck.getColumn(i, "lf_oriname")
        	);
        	this.fileDownTrans.setPostData(
        		"filefolder",
        		"fileSample"
        	);

        	this.fileDownTrans.download("C:\\ikosmo64\\spring\\hdspace\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp1\\wtpwebapps\\project_Dank\\resources\\upload\\101\\g1.jpg");
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Loan_file_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
        };

        this.loadIncludeScript("Loan_file.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
