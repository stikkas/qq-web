package ru.insoft.archive.qqweb.service;

import java.util.List;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import ru.insoft.archive.qqejb.dao.DescriptorValueDao;
import ru.insoft.archive.qqejb.dto.DictDto;
import ru.insoft.archive.qqejb.dto.DictSVDto;

/**
 * Точка доступа для справочников.
 * @author stikkas<stikkas@yandex.ru>
 */
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("dict")
public class DictService {
	@Inject
	DescriptorValueDao dvd;
	

	/**
	 * Возвращает список состояний запроса
	 * @return справочник
	 */
	@GET
	@Path("statuses")
	List<DictDto> getQuestionStatuses() {
		return dvd.getFullValues("Q_DICT_QUESTION_STATUSES");
	}
	/**
	 * Возвращает список организаций (архивов) и их сокращений (литер)
	 * @return справочник
	 */
	@GET
	@Path("organizations")
	List<DictSVDto> getOrganizations() {
		return dvd.getFullShortValues("ORG_STRUCTURE");
	}
	/**
	 * Возвращает список пользователей с правом исполнителя
	 * @return справочник
	 */
	@GET
	@Path("executors")
	List<DictDto> getExecutors() {
		return dvd.getUsersWithRule("Q_RULE_EXECUTOR");
	}

	/**
	 * Возвращает список типов запросов и их сокращения
	 * @return справочник
	 */
	@GET
	@Path("questiontypes")
	List<DictSVDto> getQuestionTypes() {
		return dvd.getFullShortValues("Q_DICT_QUEST_TYPE");
	}
	/**
	 * Возвращает список значений статусов уведомления
	 * @return справочник
	 */
	@GET
	@Path("notistats")
	List<DictDto> getNotiStats() {
		return dvd.getFullValues("Q_DICT_NOTIFY_STATUSES");
	}

}
