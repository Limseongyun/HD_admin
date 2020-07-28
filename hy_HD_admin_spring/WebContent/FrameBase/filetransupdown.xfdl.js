(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("filetransupdown");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownload", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnAdd","28","31","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","132","31","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","28","71",null,"201","31",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj.set_nodatatext("파일을 드래그하여 첨부 할 수 있습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"152\"/><Column size=\"320\"/><Column size=\"58\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FILE_NAME\"/><Cell col=\"1\" text=\"FILE_URL\"/><Cell col=\"2\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"1\" text=\"bind:FILE_URL\"/><Cell col=\"2\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","28","325",null,"201","31",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsDownload");
            obj.set_autofittype("col");
            obj.set_nodatatext("폴더를 지정하여 파일 리스트를 불러옵니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"152\"/><Column size=\"320\"/><Column size=\"58\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FILE_NAME\"/><Cell col=\"1\" text=\"FILE_URL\"/><Cell col=\"2\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"1\" text=\"bind:FILE_URL\"/><Cell col=\"2\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","28","287","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("리스트 불러오기");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"31","100","31","31",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("업로드");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00",null,"31","200","31","135",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_min("0");
            obj.set_max("100");
            this.addChild(obj.name, obj);

            obj = new Button("btnDonwload",null,"287","100","31","31",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",850,530,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("filetransupdown.xfdl","FrameBase::lib_filetransupdown.xjs");
        this.registerScript("filetransupdown.xfdl", function() {
        /**
        *  @MenuPath    techtip > filetransupdown
        *  techtip 		여러개의 파일을 동시에 업로드하고 다운로드 합니다.
        *  @FileName	filetransupdown.xfdl
        *******************************************************************************
        *  2020.07.16		nana			최초 생성
        *******************************************************************************
        */
        /**************************************************************************
         * include 영역
         **************************************************************************/
        this.executeIncludeScript("FrameBase::lib_filetransupdown.xjs"); /*include "FrameBase::lib_filetransupdown.xjs"*/;

        /**************************************************************************
         * FORM 변수 선언 영역
        **************************************************************************/
        //service url : 사용경로 지정
        this.saveUrl = "http://localhost:8080/hy_HD_admin_spring/service/";

        //file directory
        this.folderName = "fileupdown";

        /**************************************************************************
         * FORM EVENT 영역(onload)
         **************************************************************************/
        this.filetransupdown_onload = function(obj,e)
        {
        	var objConfig  = {
        						objUpTrans	: this.fileUpTrans,
        						objDownTrans: this.fileDownTrans,
        						objDialog 	: this.fileDialog,
        						objProgId	: "ProgressBar00",
        						dsUploadId	: "dsUpload",
        						dsDownloadId: "dsDownload",
        						sFolerName	: this.folderName,
        						sSaveUrl	: this.saveUrl,
        						sUploadUrl	: "fileUpload_postdatatest.jsp?filefolder=",
        						sDownloadSingleUrl	: "fileDownload_postdatatest.jsp",
        						sDownloadMultiUrl	: "fileDownload_postdatatestAll.jsp"
        					 }

        	//form init function
        	this.gfnFileTransUpDownFormLoad(obj, objConfig);
        };

        /**************************************************************************
         * CALLBACK 콜백 처리부분(Transaction)
         **************************************************************************/
         /**
         * @description Transaction CallBack function
        */
        this.fnCallback = function(svcId, errCode, errMsg)
        {
        	if(svcId == "list")
        	{
        		this.dsDownload.set_enableevent(false);
        		for(var i=0; i<this.dsDownload.getRowCount(); i++)
        		{
        			this.dsDownload.setColumn(i,"FiLE_SIZE",this.gfnCutFileSize(this.dsDownload.getColumn(i,"FiLE_SIZE")));
        		}
        		this.dsDownload.set_enableevent(true);
        	}
        };
        /**************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         **************************************************************************/
         /**
         * @description search file list
        */
        this.fnSearchFileList = function()
        {
        	//search attach file list
        	this.transaction("list",
        					 this.saveUrl + "fileDownload_servlet_list_XML.jsp",
        					 "",
        					 "dsDownload=dsList",
        					 "filefolder="+this.folderName,
        					 "fnCallback",
        					 "false",
        					 "0");
        }

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        this.btnAdd_onclick = function(obj,e)
        {
        	//file dialog open
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        this.btnDel_onclick = function(obj,e)
        {
        	//selected filelist remove
        	var nRow    = this.dsUpload.rowposition;
        	var sFileid = this.dsUpload.getColumn(nRow,"FILE_ID");
        	this.dsUpload.deleteRow(nRow);

        	//filelist remove
        	this.fileUpTrans.removeFile(sFileid);
        };

        this.btnSave_onclick = function(obj,e)
        {
        	//file upload excute
        	this.gfnUploadfile(obj.parent);

        };

        this.btnSearch_onclick = function(obj,e)
        {
        	//call file list (transaction)
        	this.fnSearchFileList();
        };

        this.btnDonwload_onclick = function(obj,e)
        {
        	//all file list download (.zip)
        	this.gfnMultiDownloadFiles(this.Grid01.parent);
        };

        this.Grid00_ondrop = function(obj,e)
        {
        	if(e.datatype == "file")
        	{
        		//ondrop grid--> add file list
        		this.gfnAddFileList(e.filelist, obj.parent);
        	}
        };

        this.Grid01_oncelldblclick = function(obj,e)
        {
        	//Grid oncelldbclick --> download file
        	this.gfnSingleDownloadFile(e.row, obj.parent);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.filetransupdown_onload,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.Grid00.addEventHandler("ondrop",this.Grid00_ondrop,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Grid01.addEventHandler("oncelldblclick",this.Grid01_oncelldblclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDonwload.addEventHandler("onclick",this.btnDonwload_onclick,this);
        };

        this.loadIncludeScript("filetransupdown.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
