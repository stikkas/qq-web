package ru.insoft.archive.qqweb.service;

import java.io.Serializable;
import java.util.List;
import javax.enterprise.context.SessionScoped;

/**
 * CDI bean для хранения информации о пользователе. для начала работы необходимо
 * при успешной авторизации вызвать метод {@link #init(userName)}.
 *
 * @author stikkas<stikkas@yandex.ru>
 */
@SessionScoped
public class UserProfile implements Serializable {

	/**
	 * логин
	 */
	private String userName;
	/**
	 * Имя пользователя для отображения (Фамилия И.О.)
	 */
	private String fio;
	/**
	 * числовой идентификатор
	 */
	private Long userId;
	/**
	 * числовой идентификатор организации пользователя
	 */
	private Long organizationId;
	/**
	 * коды прав доступа, которые назначены пользователю
	 */
	private List<String> ruleCodes;

	/**
	 * Иницализация настроек пользователя
	 *
	 * @param userName логин пользователя
	 */
	public void init(String userName) {
		this.userName = userName;	
	}

	public String getUserName() {
		return userName;
	}

	public String getFio() {
		return fio;
	}

	public Long getUserId() {
		return userId;
	}

	public Long getOrganizationId() {
		return organizationId;
	}

	public List<String> getRuleCodes() {
		return ruleCodes;
	}
	
}
