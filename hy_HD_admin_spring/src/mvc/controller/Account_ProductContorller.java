package mvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

import mvc.dao.Account_ProductDAO;
import mvc.vo.Installment_SavingVO;
import mvc.vo.QualificationVO;
import mvc.vo.SavingVO;
import mvc.vo.Shared_ChallengeVO;
import mvc.vo.Shared_SavingVO;


@Controller
public class Account_ProductContorller {
	@Autowired
	private Account_ProductDAO accountdao;
	
	@RequestMapping("/qualification_list")
	public ModelAndView Qualification_List() {
		ModelAndView mav = new ModelAndView("all");
		System.out.println("start----1");
		List<QualificationVO> qua_list= accountdao.qualification_List();
		System.out.println("start----2");
		DataSet ds = new DataSet("ar");
		
		ds.addColumn("qua_code", DataTypes.INT,10);
		ds.addColumn("qua_name", DataTypes.STRING,50);
		ds.addColumn("qua_maxage", DataTypes.INT,10);
		ds.addColumn("qua_minage", DataTypes.INT,10);
		ds.addColumn("qua_minmoney", DataTypes.INT,10);
		ds.addColumn("qua_maxmoney", DataTypes.INT,10);
		ds.addColumn("qua_minperiod", DataTypes.INT,10);
		ds.addColumn("qua_maxperiod", DataTypes.INT,10);
		
		for(QualificationVO e : qua_list) {
			int row =ds.newRow();
			ds.set(row, "qua_code", e.getQua_code());
			ds.set(row, "qua_name", e.getQua_name());
			ds.set(row, "qua_maxage", e.getQua_maxage());
			ds.set(row, "qua_minage", e.getQua_minage());
			ds.set(row, "qua_minmoney", e.getQua_minmoney());
			ds.set(row, "qua_maxmoney", e.getQua_maxmoney());
			ds.set(row, "qua_minperiod", e.getQua_minperiod());
			ds.set(row, "qua_maxperiod", e.getQua_maxperiod());
			
		}
		mav.addObject("ds", ds);
		
		return mav;
	}
	
	@RequestMapping("/qualification_insert")
	public ModelAndView qualification_insert(QualificationVO vo) {
		ModelAndView mav = new ModelAndView("redirect:/");
	
		accountdao.qualification_insert(vo);
		return mav;
	}
	
	@RequestMapping("/qualification_delete")
	public ModelAndView qualification_delete(QualificationVO vo) {
		ModelAndView mav = new ModelAndView("redirect:/");
	
		accountdao.qualification_delete(vo);
		return mav;
	}
	
	@RequestMapping("/saving_list")
	public ModelAndView saving_list() {
		ModelAndView mav = new ModelAndView("all");
		List<SavingVO> sav_list=accountdao.saving_list();
		DataSet ds = new DataSet("ar");
		ds.addColumn("sav_code",DataTypes.INT,10);
		ds.addColumn("sav_name",DataTypes.STRING,50);
		ds.addColumn("sav_interestrate",DataTypes.INT,10);
		ds.addColumn("sav_online",DataTypes.INT,10);
		ds.addColumn("shas_code",DataTypes.INT,10);
		ds.addColumn("qua_code",DataTypes.INT,10);
		
		for(SavingVO e : sav_list) {
			int row =ds.newRow();
			ds.set(row, "sav_code", e.getSav_code());
			ds.set(row,"sav_name",e.getSav_name());
			ds.set(row,"sav_interestrate",e.getSav_interestrate());
			ds.set(row,"sav_online",e.getSav_online());
			ds.set(row,"shas_code",e.getShas_code());
			ds.set(row,"qua_code",e.getQua_code());
		}
		mav.addObject("ds",ds);
		return mav;
	}
	@RequestMapping("/saving_insert")
	public ModelAndView saving_insert(SavingVO vo) {
		ModelAndView mav = new ModelAndView();
		System.out.println(vo.getShas_code());
		accountdao.saving_insert(vo);
		return mav;
	}
	
	@RequestMapping("/saving_delete")
	public ModelAndView saving_delete(SavingVO vo) {
		ModelAndView mav= new ModelAndView();
		accountdao.saving_delete(vo);
		return mav;
	}
	
	@RequestMapping("/shared_saving_list")
	public ModelAndView shared_saving_list() {
		ModelAndView mav = new ModelAndView("all");
		List<Shared_SavingVO> shas_list=accountdao.shared_saving_list();
		DataSet ds = new DataSet("ar");
		ds.addColumn("shas_code",DataTypes.INT,10);
		ds.addColumn("shas_count",DataTypes.INT,10);
		ds.addColumn("shas_master",DataTypes.INT,10);
		
		
		for(Shared_SavingVO e : shas_list) {
			int row =ds.newRow();
			ds.set(row, "shas_code", e.getShas_code());
			ds.set(row,"shas_count",e.getShas_count());
			ds.set(row,"shas_master",e.getShas_master());
			
		}
		mav.addObject("ds",ds);
		return mav;
	}
	@RequestMapping("/shared_saving_insert")
	public ModelAndView shared_saving_insert(Shared_SavingVO vo) {
		ModelAndView mav = new ModelAndView("redirect:/");
		accountdao.shared_saving_insert(vo);
		
		
		return mav;
	}
	
	@RequestMapping("/shared_saving_delete")
	public ModelAndView shared_saving_delete(Shared_SavingVO vo) {
		ModelAndView mav = new ModelAndView();
		accountdao.shared_saving_delete(vo);
		return mav;
	}


	@RequestMapping("/installment_saving_list")
	public ModelAndView ins_list() {
		ModelAndView mav = new ModelAndView("all");
		DataSet ds = new DataSet("ar");
		List<Installment_SavingVO> ins_list = accountdao.ins_list();
		ds.addColumn("ins_code",DataTypes.INT,10);
		ds.addColumn("ins_name",DataTypes.STRING,50);
		ds.addColumn("ins_online",DataTypes.INT,10);
		ds.addColumn("ins_interestrate",DataTypes.INT,10);
		ds.addColumn("ins_droprate", DataTypes.INT,10);
		ds.addColumn("ins_putmoney",DataTypes.INT,10);
		ds.addColumn("ins_term",DataTypes.INT,10);
		ds.addColumn("shac_code",DataTypes.INT,10);
		ds.addColumn("qua_code",DataTypes.INT,10);
		
		
		for(Installment_SavingVO e : ins_list) {
			int row = ds.newRow();
			ds.set(row, "ins_code", e.getIns_code());
			ds.set(row,"ins_name",e.getIns_name());
			ds.set(row,"ins_online",e.getIns_online());
			ds.set(row,"ins_interestrate",e.getIns_interestrate());
			ds.set(row,"ins_droprate",e.getIns_droprate());
			ds.set(row, "ins_putmoney", e.getIns_putmoney());
			ds.set(row, "ins_term", e.getIns_term());
			ds.set(row,"shac_code",e.getShac_code());
			ds.set(row,"qua_code",e.getQua_code());
		}
		mav.addObject("ds",ds);
		return mav;
	}
	@RequestMapping("/installment_saving_insert")
	public ModelAndView ins_insert(Installment_SavingVO vo) {
		ModelAndView mav = new ModelAndView();
		accountdao.ins_insert(vo);
		return mav;
	}
	@RequestMapping("/installment_saving_delete")
	public ModelAndView ins_delete(Installment_SavingVO vo) {
		ModelAndView mav = new ModelAndView();
		accountdao.ins_delete(vo);
		return mav;
	}
	
	
	@RequestMapping("/shared_challenge_list")
	public ModelAndView shac_list() {
		ModelAndView mav = new ModelAndView("all");
		DataSet ds = new DataSet("ar");
		ds.addColumn("shac_code",DataTypes.INT,10);
		ds.addColumn("shac_mannum",DataTypes.INT,10);
		ds.addColumn("shac_master",DataTypes.INT,10);
		List<Shared_ChallengeVO> shac_list = accountdao.shac_list();
		for(Shared_ChallengeVO e : shac_list) {
			int row = ds.newRow();
			ds.set(row, "shac_code", e.getShac_code());
			ds.set(row, "shac_mannum", e.getShac_mannum());
			ds.set(row,"shac_master",e.getShac_master());
		}
		mav.addObject("ds", ds);
		return mav;
	}
	@RequestMapping("/shared_challenge_insert")
	public ModelAndView shac_insert(Shared_ChallengeVO vo) {
		ModelAndView mav = new ModelAndView();
		accountdao.shac_insert(vo);
		return mav;
	}
	@RequestMapping("/shared_challenge_delete")
	public ModelAndView shac_delete(Shared_ChallengeVO vo) {
		ModelAndView mav = new ModelAndView();
		accountdao.shac_delete(vo);
		return mav;
	}
}
